import { shuffle } from '~/utils/shuffle'

export type DatTinPhase =
  | 'welcome'
  | 'setup'
  | 'countdown'
  | 'playing'
  | 'review'
  | 'roundOver'
  | 'gameOver'

export type DeckKey = 'naija' | 'global'

export type DatTinCard = {
  targetWord: string
  forbiddenWords: string[]
  category?: DeckKey
}

export type DatTinCardData = Record<DeckKey, DatTinCard[]>

export type DatTinTeam = {
  name: string
  score: number
  color: string
}

export type DatTinRoundCard = {
  word: string
  status: 'correct' | 'skipped'
}

const MAX_ROUNDS_PER_TEAM = 3
const COUNTDOWN_DURATION = 10
const TEAM_COLORS = [
  'var(--team1-color)',
  'var(--team2-color)',
  'var(--team3-color)',
  'var(--team4-color)'
]

export const datTinTimerOptions = [
  { value: 30, title: 'Sharp Sharp', subtitle: '30s' },
  { value: 60, title: 'Normal Level', subtitle: '60s' },
  { value: 90, title: 'Soft Work', subtitle: '90s' },
  { value: 120, title: 'African Time', subtitle: '120s' }
]

export function useDatTinGame(sound: ReturnType<typeof useGameSound>) {
  const phase = ref<DatTinPhase>('welcome')
  const cardData = ref<DatTinCardData>({ naija: [], global: [] })
  const loadError = ref('')
  const selectedDecks = ref<Set<DeckKey>>(new Set(['naija']))
  const roundDuration = ref(30)
  const numberOfTeams = ref(0)
  const teams = ref<DatTinTeam[]>([])
  const currentTeamIndex = ref(0)
  const totalRoundsCompleted = ref(0)
  const shuffledCards = ref<DatTinCard[]>([])
  const currentCardIndex = ref(0)
  const roundCards = ref<DatTinRoundCard[]>([])
  const roundScore = ref(0)
  const timeLeft = ref(30)
  const countdown = ref(COUNTDOWN_DURATION)
  const isPaused = ref(false)
  const cardAnimKey = ref(0)
  const scoreAnimKey = ref(0)

  let roundTimer: ReturnType<typeof setInterval> | null = null
  let countdownTimer: ReturnType<typeof setInterval> | null = null

  const activeCards = computed(() => {
    const cards: DatTinCard[] = []
    selectedDecks.value.forEach(deck => {
      if (cardData.value[deck]) {
        cards.push(...cardData.value[deck].map(card => ({ ...card, category: deck })))
      }
    })
    return cards
  })

  const currentCard = computed(() => shuffledCards.value[currentCardIndex.value])
  const currentTeam = computed(() => teams.value[currentTeamIndex.value])
  const reviewScore = computed(() => roundCards.value.filter(card => card.status === 'correct').length)
  const sortedTeams = computed(() => [...teams.value].sort((a, b) => b.score - a.score))
  const leadingTeam = computed(() => sortedTeams.value[0])
  const champion = computed(() => sortedTeams.value[0])

  const currentRoundNumber = computed(() =>
    numberOfTeams.value ? Math.floor(totalRoundsCompleted.value / numberOfTeams.value) + 1 : 1
  )

  const nextRoundLabel = computed(() => {
    const nextTeam = teams.value[currentTeamIndex.value]
    if (!nextTeam) return 'Next round'
    return `Start ${nextTeam.name}'s Turn (Round ${currentRoundNumber.value}/${MAX_ROUNDS_PER_TEAM})`
  })

  async function loadCards() {
    try {
      const response = await fetch('/data/cards.json')
      if (!response.ok) throw new Error('Cards could not load.')
      cardData.value = await response.json()
    } catch {
      loadError.value = 'Could not load Dat Tin cards. Please refresh and try again.'
    }
  }

  onMounted(() => {
    loadCards()
  })

  onBeforeUnmount(() => {
    clearTimers()
  })

  function startFromWelcome() {
    sound.init()
    phase.value = 'setup'
  }

  function isDeckSelected(deck: DeckKey) {
    return selectedDecks.value.has(deck)
  }

  function toggleDeck(deck: DeckKey) {
    if (selectedDecks.value.has(deck)) {
      if (selectedDecks.value.size > 1) {
        selectedDecks.value.delete(deck)
        selectedDecks.value = new Set(selectedDecks.value)
      }
      return
    }
    selectedDecks.value.add(deck)
    selectedDecks.value = new Set(selectedDecks.value)
  }

  function setRoundDuration(duration: number) {
    roundDuration.value = duration
  }

  function setupAndStartGame(teamCount: number) {
    if (activeCards.value.length === 0) {
      loadError.value = 'Please select at least one deck!'
      return
    }

    numberOfTeams.value = teamCount
    teams.value = Array.from({ length: teamCount }, (_, index) => ({
      name: `Team ${index + 1}`,
      score: 0,
      color: TEAM_COLORS[index]
    }))
    currentTeamIndex.value = 0
    totalRoundsCompleted.value = 0
    shuffledCards.value = shuffle(activeCards.value)
    currentCardIndex.value = 0
    loadError.value = ''
    startCountdown()
  }

  function startCountdown() {
    clearTimers()
    phase.value = 'countdown'
    countdown.value = COUNTDOWN_DURATION
    sound.countdownBeep()

    countdownTimer = setInterval(() => {
      countdown.value -= 1
      if (countdown.value > 0) {
        sound.countdownBeep()
      }
      if (countdown.value <= 0) {
        clearInterval(countdownTimer!)
        countdownTimer = null
        sound.goBeep()
        startRound()
      }
    }, 1000)
  }

  function skipCountdown() {
    clearTimers()
    startRound()
  }

  function startRound() {
    clearTimers()
    phase.value = 'playing'
    isPaused.value = false
    roundCards.value = []
    roundScore.value = 0
    timeLeft.value = roundDuration.value
    cardAnimKey.value += 1

    roundTimer = setInterval(() => {
      if (isPaused.value) return
      timeLeft.value -= 1
      if (timeLeft.value <= 0) {
        sound.playTimeUp()
        showReview()
      }
    }, 1000)
  }

  function handleCorrect() {
    if (!currentCard.value) return
    roundCards.value.push({ word: currentCard.value.targetWord, status: 'correct' })
    roundScore.value += 1
    scoreAnimKey.value += 1
    sound.playCorrect()
    nextCard()
  }

  function handlePass() {
    if (!currentCard.value) return
    roundCards.value.push({ word: currentCard.value.targetWord, status: 'skipped' })
    nextCard()
  }

  function nextCard() {
    currentCardIndex.value += 1
    if (currentCardIndex.value >= shuffledCards.value.length) {
      shuffledCards.value = shuffle(activeCards.value)
      currentCardIndex.value = 0
    }
    cardAnimKey.value += 1
  }

  function togglePause() {
    if (phase.value !== 'playing') return
    isPaused.value = !isPaused.value
    if (isPaused.value) {
      clearTimers()
      return
    }
    roundTimer = setInterval(() => {
      if (isPaused.value) return
      timeLeft.value -= 1
      if (timeLeft.value <= 0) {
        sound.playTimeUp()
        showReview()
      }
    }, 1000)
  }

  function showReview() {
    clearTimers()
    phase.value = 'review'
  }

  function toggleCardStatus(index: number) {
    const item = roundCards.value[index]
    if (!item) return
    item.status = item.status === 'correct' ? 'skipped' : 'correct'
  }

  function confirmScore() {
    roundScore.value = reviewScore.value
    endRound()
  }

  function endRound() {
    clearTimers()
    if (!currentTeam.value) return

    currentTeam.value.score += roundScore.value
    currentTeamIndex.value = (currentTeamIndex.value + 1) % numberOfTeams.value
    totalRoundsCompleted.value += 1

    if (totalRoundsCompleted.value >= numberOfTeams.value * MAX_ROUNDS_PER_TEAM) {
      phase.value = 'gameOver'
      return
    }

    phase.value = 'roundOver'
  }

  function resetGame() {
    clearTimers()
    isPaused.value = false
    phase.value = 'setup'
    totalRoundsCompleted.value = 0
    currentCardIndex.value = 0
    roundScore.value = 0
  }

  function quitGame() {
    if (!import.meta.client || !confirm('Are you sure you want to quit? Your progress will be lost.')) {
      return
    }
    clearTimers()
    isPaused.value = false
    phase.value = 'welcome'
    totalRoundsCompleted.value = 0
    currentCardIndex.value = 0
    roundScore.value = 0
  }

  function teamIndicatorStyle(team?: DatTinTeam) {
    if (!team) return {}
    return { backgroundColor: team.color }
  }

  function scoreboardItemStyle(team: DatTinTeam) {
    return { backgroundColor: team.color }
  }

  function leaderGradientStyle(team?: DatTinTeam) {
    if (!team) return {}
    return {
      background: `linear-gradient(135deg, ${team.color}, var(--yellow-300))`
    }
  }

  function medalForPlace(index: number) {
    if (index === 0) return '🥇'
    if (index === 1) return '🥈'
    if (index === 2) return '🥉'
    return `${index + 1}.`
  }

  function clearTimers() {
    if (roundTimer) clearInterval(roundTimer)
    if (countdownTimer) clearInterval(countdownTimer)
    roundTimer = null
    countdownTimer = null
  }

  return {
    phase,
    loadError,
    selectedDecks,
    roundDuration,
    teams,
    roundCards,
    roundScore,
    timeLeft,
    countdown,
    isPaused,
    cardAnimKey,
    scoreAnimKey,
    currentCard,
    currentTeam,
    reviewScore,
    sortedTeams,
    leadingTeam,
    champion,
    nextRoundLabel,
    isDeckSelected,
    startFromWelcome,
    toggleDeck,
    setRoundDuration,
    setupAndStartGame,
    startCountdown,
    skipCountdown,
    handleCorrect,
    handlePass,
    togglePause,
    toggleCardStatus,
    confirmScore,
    resetGame,
    quitGame,
    teamIndicatorStyle,
    scoreboardItemStyle,
    leaderGradientStyle,
    medalForPlace
  }
}
