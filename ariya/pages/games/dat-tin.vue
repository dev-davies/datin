<template>
  <main class="game-page dat-tin-theme">
    <div class="container">
      <nav class="nav-row" aria-label="Game navigation">
        <NuxtLink class="brand-mark" to="/">
          <span class="brand-icon">A</span>
          <span>Ariya</span>
        </NuxtLink>
        <NuxtLink class="back-link" to="/">Back to lobby</NuxtLink>
      </nav>

      <section v-if="phase === 'setup'" class="dat-shell">
        <div class="dat-hero">
          <p class="eyebrow">Dat Tin</p>
          <h1 class="game-title">No talk am.</h1>
          <p class="game-description">
            Describe the green word to your team without saying any of the forbidden words.
            Pick decks, teams, and round time, then pass the phone around.
          </p>
        </div>

        <div class="dat-panel">
          <h2>Choose decks</h2>
          <div class="choice-grid">
            <button
              v-for="deck in deckOptions"
              :key="deck.key"
              :class="['choice-card', { active: selectedDecks.includes(deck.key) }]"
              type="button"
              @click="toggleDeck(deck.key)"
            >
              <strong>{{ deck.emoji }} {{ deck.label }}</strong>
              <span>{{ deck.description }}</span>
            </button>
          </div>

          <h2>Teams</h2>
          <div class="pill-row">
            <button
              v-for="count in teamCounts"
              :key="count"
              :class="['pill-btn', { active: teamCount === count }]"
              type="button"
              @click="teamCount = count"
            >
              {{ count }}
            </button>
          </div>

          <h2>Round time</h2>
          <div class="pill-row">
            <button
              v-for="duration in durations"
              :key="duration.value"
              :class="['pill-btn', { active: roundDuration === duration.value }]"
              type="button"
              @click="roundDuration = duration.value"
            >
              {{ duration.label }}
            </button>
          </div>

          <button class="btn dat-primary" type="button" :disabled="!canStart" @click="setupGame">
            Start game
          </button>
          <p v-if="loadError" class="dat-warning">{{ loadError }}</p>
        </div>
      </section>

      <section v-else-if="phase === 'countdown'" class="dat-center-card">
        <p class="eyebrow">Get ready</p>
        <h1 class="countdown-number">{{ countdown }}</h1>
        <p class="game-description">{{ currentTeam?.name }} is up next.</p>
        <button class="btn dat-primary" type="button" @click="skipCountdown">Play now</button>
      </section>

      <section v-else-if="phase === 'playing'" class="play-layout">
        <header class="play-header">
          <div>
            <p class="eyebrow">{{ currentTeam?.name }}'s turn</p>
            <h1>{{ roundScore }} point{{ roundScore === 1 ? '' : 's' }}</h1>
          </div>
          <div class="timer-badge" :class="{ danger: timeLeft <= 10 }">{{ timeLeft }}</div>
        </header>

        <article v-if="currentCard" class="word-card">
          <p>Dat Tin</p>
          <h2>{{ currentCard.targetWord }}</h2>
          <div>
            <span v-for="word in currentCard.forbiddenWords" :key="word">{{ word }}</span>
          </div>
        </article>

        <div class="play-actions">
          <button class="btn secondary" type="button" @click="handlePass">Pass</button>
          <button class="btn dat-primary" type="button" @click="handleCorrect">Correct</button>
          <button class="btn secondary" type="button" @click="togglePause">{{ isPaused ? 'Resume' : 'Pause' }}</button>
        </div>
      </section>

      <section v-else-if="phase === 'review'" class="dat-center-card">
        <p class="eyebrow">Review round</p>
        <h1 class="game-title">{{ reviewScore }} point{{ reviewScore === 1 ? '' : 's' }}</h1>
        <div class="review-list">
          <button
            v-for="(item, index) in roundCards"
            :key="`${item.word}-${index}`"
            :class="['review-item', item.status]"
            type="button"
            @click="toggleCardStatus(index)"
          >
            <span>{{ item.word }}</span>
            <strong>{{ item.status === 'correct' ? 'Correct' : 'Pass' }}</strong>
          </button>
        </div>
        <button class="btn dat-primary" type="button" @click="confirmScore">Confirm score</button>
      </section>

      <section v-else-if="phase === 'roundOver'" class="dat-center-card">
        <p class="eyebrow">Round over</p>
        <h1 class="game-title">Current scores</h1>
        <div class="score-grid">
          <div v-for="team in sortedTeams" :key="team.name" class="score-card" :style="teamStyle(team)">
            <span>{{ team.name }}</span>
            <strong>{{ team.score }}</strong>
          </div>
        </div>
        <button class="btn dat-primary" type="button" @click="startCountdown">
          Start {{ currentTeam?.name }}'s turn
        </button>
      </section>

      <section v-else class="dat-center-card">
        <p class="eyebrow">Champion</p>
        <h1 class="game-title">{{ champion?.name }}</h1>
        <p class="game-description">{{ champion?.score }} total points. Oya, run it back?</p>
        <div class="score-grid">
          <div v-for="team in sortedTeams" :key="team.name" class="score-card" :style="teamStyle(team)">
            <span>{{ team.name }}</span>
            <strong>{{ team.score }}</strong>
          </div>
        </div>
        <button class="btn dat-primary" type="button" @click="resetGame">New game</button>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
type GamePhase = 'setup' | 'countdown' | 'playing' | 'review' | 'roundOver' | 'gameOver'
type DeckKey = 'naija' | 'global'
type Card = {
  targetWord: string
  forbiddenWords: string[]
  category?: DeckKey
}
type CardData = Record<DeckKey, Card[]>
type Team = {
  name: string
  score: number
  color: string
}
type RoundCard = {
  word: string
  status: 'correct' | 'skipped'
}

const maxRoundsPerTeam = 3
const countdownDuration = 10
const teamColors = ['#38bdf8', '#f472b6', '#fb923c', '#a78bfa']
const deckOptions: { key: DeckKey; label: string; emoji: string; description: string }[] = [
  { key: 'naija', label: 'Naija', emoji: '🇳🇬', description: 'Local food, slang, places, music, and culture.' },
  { key: 'global', label: 'Global', emoji: '🌍', description: 'Worldwide pop culture, places, and everyday words.' }
]
const teamCounts = [2, 3, 4]
const durations = [
  { value: 30, label: '30s' },
  { value: 60, label: '60s' },
  { value: 90, label: '90s' },
  { value: 120, label: '120s' }
]

const phase = ref<GamePhase>('setup')
const cardData = ref<CardData>({ naija: [], global: [] })
const loadError = ref('')
const selectedDecks = ref<DeckKey[]>(['naija'])
const teamCount = ref(2)
const roundDuration = ref(30)
const teams = ref<Team[]>([])
const currentTeamIndex = ref(0)
const totalRoundsCompleted = ref(0)
const shuffledCards = ref<Card[]>([])
const currentCardIndex = ref(0)
const roundCards = ref<RoundCard[]>([])
const roundScore = ref(0)
const timeLeft = ref(30)
const countdown = ref(countdownDuration)
const isPaused = ref(false)
let roundTimer: ReturnType<typeof setInterval> | null = null
let countdownTimer: ReturnType<typeof setInterval> | null = null

const activeCards = computed(() => selectedDecks.value.flatMap(deck => cardData.value[deck].map(card => ({ ...card, category: deck }))))
const canStart = computed(() => selectedDecks.value.length > 0 && activeCards.value.length > 0)
const currentCard = computed(() => shuffledCards.value[currentCardIndex.value])
const currentTeam = computed(() => teams.value[currentTeamIndex.value])
const reviewScore = computed(() => roundCards.value.filter(card => card.status === 'correct').length)
const sortedTeams = computed(() => [...teams.value].sort((a, b) => b.score - a.score))
const champion = computed(() => sortedTeams.value[0])

onMounted(async () => {
  try {
    const response = await fetch('/data/cards.json')
    if (!response.ok) throw new Error('Cards could not load.')
    cardData.value = await response.json()
  } catch {
    loadError.value = 'Could not load Dat Tin cards. Please refresh and try again.'
  }
})

onBeforeUnmount(() => {
  clearTimers()
})

function toggleDeck(deck: DeckKey) {
  if (selectedDecks.value.includes(deck)) {
    if (selectedDecks.value.length === 1) return
    selectedDecks.value = selectedDecks.value.filter(item => item !== deck)
    return
  }

  selectedDecks.value = [...selectedDecks.value, deck]
}

function setupGame() {
  if (!canStart.value) return
  teams.value = Array.from({ length: teamCount.value }, (_, index) => ({
    name: `Team ${index + 1}`,
    score: 0,
    color: teamColors[index]
  }))
  currentTeamIndex.value = 0
  totalRoundsCompleted.value = 0
  shuffledCards.value = shuffle(activeCards.value)
  currentCardIndex.value = 0
  startCountdown()
}

function startCountdown() {
  clearTimers()
  phase.value = 'countdown'
  countdown.value = countdownDuration
  countdownTimer = setInterval(() => {
    countdown.value -= 1
    if (countdown.value <= 0) startRound()
  }, 1000)
}

function skipCountdown() {
  startRound()
}

function startRound() {
  clearTimers()
  phase.value = 'playing'
  isPaused.value = false
  roundCards.value = []
  roundScore.value = 0
  timeLeft.value = roundDuration.value
  roundTimer = setInterval(() => {
    if (isPaused.value) return
    timeLeft.value -= 1
    if (timeLeft.value <= 0) showReview()
  }, 1000)
}

function handleCorrect() {
  if (!currentCard.value) return
  roundCards.value.push({ word: currentCard.value.targetWord, status: 'correct' })
  roundScore.value += 1
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
}

function togglePause() {
  isPaused.value = !isPaused.value
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
  if (!currentTeam.value) return
  currentTeam.value.score += reviewScore.value
  totalRoundsCompleted.value += 1
  currentTeamIndex.value = (currentTeamIndex.value + 1) % teams.value.length
  phase.value = totalRoundsCompleted.value >= teams.value.length * maxRoundsPerTeam ? 'gameOver' : 'roundOver'
}

function resetGame() {
  clearTimers()
  phase.value = 'setup'
  teams.value = []
  currentTeamIndex.value = 0
  totalRoundsCompleted.value = 0
  roundCards.value = []
  roundScore.value = 0
  currentCardIndex.value = 0
}

function clearTimers() {
  if (roundTimer) clearInterval(roundTimer)
  if (countdownTimer) clearInterval(countdownTimer)
  roundTimer = null
  countdownTimer = null
}

function teamStyle(team: Team) {
  return { '--team-color': team.color }
}

function shuffle<T>(items: T[]) {
  const shuffled = [...items]
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]]
  }
  return shuffled
}
</script>

