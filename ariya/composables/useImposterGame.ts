export type ImposterPhase = 'welcome' | 'setup' | 'passReveal' | 'discussion' | 'voting' | 'resolution'

export const imposterWordCategories: Record<string, string[]> = {
  Movies: ['The Matrix', 'Titanic', 'Black Panther', 'Inception', 'Avatar', 'The Godfather', 'Jaws', 'Toy Story', 'Spider-Man', 'Jurassic Park'],
  Events: ['Olympics', 'World Cup', 'Met Gala', 'Super Bowl', 'Coachella', 'Comic-Con', 'Election Day', 'Christmas', 'New Year'],
  'Naija Slangs': ['Sapa', 'Wahala', 'Japa', 'Odogwu', 'Aza', 'Trenches', 'E Choke', 'Bant', 'Gbas Gbos', 'Idan', 'Soro Soke'],
  'Pop Culture': ['TikTok', 'Cancel Culture', 'K-Pop', 'Euphoria', 'Memes', 'Influencer', 'Viral Video', 'Stan Twitter', 'Podcasts']
}

export function useImposterGame() {
  const phase = ref<ImposterPhase>('welcome')
  const selectedCategory = ref('Movies')
  const players = ref<string[]>([])
  const newPlayerName = ref('')
  const currentWord = ref('')
  const imposterIndex = ref<number | null>(null)
  const currentPlayerIndex = ref(0)
  const isRoleVisible = ref(false)
  const votes = ref<number[]>([])
  const votedOutIndex = ref<number | null>(null)
  const votedOutPlayer = ref('')

  const categoryNames = computed(() => Object.keys(imposterWordCategories))
  const currentPlayer = computed(() => players.value[currentPlayerIndex.value] ?? '')
  const actualImposter = computed(() =>
    imposterIndex.value === null ? '' : players.value[imposterIndex.value]
  )

  function goToSetup() {
    phase.value = 'setup'
  }

  function addPlayer() {
    const name = newPlayerName.value.trim()
    if (!name) return
    players.value = [...players.value, name]
    newPlayerName.value = ''
  }

  function removePlayer(index: number) {
    players.value = players.value.filter((_, playerIndex) => playerIndex !== index)
  }

  function startGame() {
    if (players.value.length < 3) return
    imposterIndex.value = Math.floor(Math.random() * players.value.length)
    const words = imposterWordCategories[selectedCategory.value]
    currentWord.value = words[Math.floor(Math.random() * words.length)]
    currentPlayerIndex.value = 0
    isRoleVisible.value = false
    votedOutIndex.value = null
    votedOutPlayer.value = ''
    phase.value = 'passReveal'
  }

  function nextPlayerReveal() {
    isRoleVisible.value = false
    if (currentPlayerIndex.value < players.value.length - 1) {
      currentPlayerIndex.value += 1
      return
    }
    phase.value = 'discussion'
  }

  function startVoting() {
    currentPlayerIndex.value = 0
    isRoleVisible.value = false
    votes.value = new Array(players.value.length).fill(0)
    phase.value = 'voting'
  }

  function castVote(votedForIndex: number) {
    const nextVotes = [...votes.value]
    nextVotes[votedForIndex] += 1
    votes.value = nextVotes
    isRoleVisible.value = false

    if (currentPlayerIndex.value < players.value.length - 1) {
      currentPlayerIndex.value += 1
      return
    }

    resolveGame(nextVotes)
  }

  function resolveGame(finalVotes: number[]) {
    let maxVotes = 0
    let playerWithMostVotes = -1

    finalVotes.forEach((voteCount, index) => {
      if (voteCount > maxVotes) {
        maxVotes = voteCount
        playerWithMostVotes = index
      }
    })

    votedOutIndex.value = playerWithMostVotes
    votedOutPlayer.value = players.value[playerWithMostVotes]
    phase.value = 'resolution'
  }

  function resetGame() {
    phase.value = 'welcome'
    currentPlayerIndex.value = 0
    isRoleVisible.value = false
    votes.value = []
    votedOutIndex.value = null
    votedOutPlayer.value = ''
  }

  return {
    phase,
    selectedCategory,
    players,
    newPlayerName,
    currentWord,
    imposterIndex,
    currentPlayerIndex,
    isRoleVisible,
    votedOutIndex,
    votedOutPlayer,
    categoryNames,
    currentPlayer,
    actualImposter,
    goToSetup,
    addPlayer,
    removePlayer,
    startGame,
    nextPlayerReveal,
    startVoting,
    castVote,
    resetGame
  }
}
