<template>
  <main class="game-page imposter-theme">
    <div class="imposter-wrap">
      <nav class="imposter-nav" aria-label="Game navigation">
        <NuxtLink class="brand-mark" to="/">
          <span class="brand-icon">A</span>
          <span>Ariya</span>
        </NuxtLink>
        <NuxtLink class="back-link" to="/">Back to lobby</NuxtLink>
      </nav>

      <div class="imposter-header">
        <span>Party game</span>
        <h1>Imposter <em>Hunt</em></h1>
      </div>

      <section v-if="gamePhase === 'setup'" class="imposter-card">
        <div class="phase-tag blue">Setup</div>
        <h2>Select Category</h2>
        <div class="category-grid">
          <button
            v-for="category in categoryNames"
            :key="category"
            :class="['imposter-option', { active: selectedCategory === category }]"
            type="button"
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>

        <hr>

        <h2>Add Players</h2>
        <div class="player-entry">
          <input
            v-model="newPlayerName"
            placeholder="ENTER PLAYER NAME..."
            type="text"
            @keyup.enter="addPlayer"
          >
          <button class="neo-btn primary" type="button" @click="addPlayer">Add</button>
        </div>

        <ul class="player-list">
          <li v-for="(player, index) in players" :key="`${player}-${index}`">
            <span>{{ player }}</span>
            <button class="neo-btn danger small" type="button" @click="removePlayer(index)">X</button>
          </li>
        </ul>

        <div v-if="players.length < 3" class="need-players">
          Need at least 3 players ({{ players.length }}/3)
        </div>
        <button v-else class="neo-btn success full" type="button" @click="startGame">Start Game</button>
      </section>

      <section v-else-if="gamePhase === 'passReveal'" class="imposter-card">
        <div v-if="!isRoleVisible" class="handoff">
          <h2>Pass the device to</h2>
          <h1>{{ currentPlayer }}</h1>
          <p>Make sure no one else is looking!</p>
          <button class="neo-btn primary full" type="button" @click="isRoleVisible = true">
            I am {{ currentPlayer }}
          </button>
        </div>

        <div v-else>
          <h2 class="role-title"><span>🎯</span> Your Role</h2>
          <div v-if="currentPlayerIndex === imposterIndex" class="role-box imposter">
            <h3>🔪 Imposter</h3>
            <p>Try to blend in. You do not know the secret word.</p>
          </div>
          <div v-else class="role-box crewmate">
            <h3>🧑‍🚀 Crewmate</h3>
            <p>The secret word is</p>
            <strong>{{ currentWord }}</strong>
          </div>
          <button class="neo-btn danger full" type="button" @click="nextPlayerReveal">Hide & Continue</button>
        </div>
      </section>

      <section v-else-if="gamePhase === 'discussion'" class="imposter-card discussion-card">
        <div class="phase-tag pink">Phase 03</div>
        <h2><span>💬</span> Discussion</h2>
        <p>Ask questions about the secret word. Find out who doesn't know it!</p>
        <div class="discuss-box">Discuss!</div>
        <button class="neo-btn danger full" type="button" @click="startVoting">Stop & Vote Now</button>
      </section>

      <section v-else-if="gamePhase === 'voting'" class="imposter-card voting-card">
        <div v-if="!isRoleVisible" class="handoff">
          <h2>Pass to vote secretly</h2>
          <h1>{{ currentPlayer }}</h1>
          <button class="neo-btn primary full" type="button" @click="isRoleVisible = true">Ready to vote</button>
        </div>
        <div v-else class="vote-panel">
          <h2>Who is the Imposter?</h2>
          <button
            v-for="(player, index) in players"
            :key="`${player}-vote-${index}`"
            class="neo-btn vote"
            type="button"
            :disabled="index === currentPlayerIndex"
            @click="castVote(index)"
          >
            <span>{{ player }}</span>
            <small v-if="index === currentPlayerIndex">You</small>
          </button>
        </div>
      </section>

      <section v-else class="imposter-card resolution-card">
        <h2>Game Over!</h2>
        <div class="result-box">
          <p>The group voted out: <strong class="red">{{ votedOutPlayer }}</strong></p>
          <p>The actual Imposter was: <strong class="green">{{ actualImposter }}</strong></p>
        </div>
        <h1 v-if="votedOutIndex === imposterIndex" class="crewmates-win">Crewmates Win!</h1>
        <h1 v-else class="imposter-win">Imposter Wins!</h1>
        <div class="secret-word">
          <p>The secret word was</p>
          <strong>{{ currentWord }}</strong>
        </div>
        <button class="neo-btn primary full" type="button" @click="resetGame">Play Again</button>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
type GamePhase = 'setup' | 'passReveal' | 'discussion' | 'voting' | 'resolution'

const wordCategories: Record<string, string[]> = {
  Movies: ['The Matrix', 'Titanic', 'Black Panther', 'Inception', 'Avatar', 'The Godfather', 'Jaws', 'Toy Story', 'Spider-Man', 'Jurassic Park'],
  Events: ['Olympics', 'World Cup', 'Met Gala', 'Super Bowl', 'Coachella', 'Comic-Con', 'Election Day', 'Christmas', 'New Year'],
  'Naija Slangs': ['Sapa', 'Wahala', 'Japa', 'Odogwu', 'Aza', 'Trenches', 'E Choke', 'Bant', 'Gbas Gbos', 'Idan', 'Soro Soke'],
  'Pop Culture': ['TikTok', 'Cancel Culture', 'K-Pop', 'Euphoria', 'Memes', 'Influencer', 'Viral Video', 'Stan Twitter', 'Podcasts']
}

const gamePhase = ref<GamePhase>('setup')
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

const categoryNames = computed(() => Object.keys(wordCategories))
const currentPlayer = computed(() => players.value[currentPlayerIndex.value] ?? '')
const actualImposter = computed(() => imposterIndex.value === null ? '' : players.value[imposterIndex.value])

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
  const words = wordCategories[selectedCategory.value]
  currentWord.value = words[Math.floor(Math.random() * words.length)]
  currentPlayerIndex.value = 0
  isRoleVisible.value = false
  votedOutIndex.value = null
  votedOutPlayer.value = ''
  gamePhase.value = 'passReveal'
}

function nextPlayerReveal() {
  isRoleVisible.value = false
  if (currentPlayerIndex.value < players.value.length - 1) {
    currentPlayerIndex.value += 1
    return
  }
  gamePhase.value = 'discussion'
}

function startVoting() {
  currentPlayerIndex.value = 0
  isRoleVisible.value = false
  votes.value = new Array(players.value.length).fill(0)
  gamePhase.value = 'voting'
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
  gamePhase.value = 'resolution'
}

function resetGame() {
  gamePhase.value = 'setup'
  currentPlayerIndex.value = 0
  isRoleVisible.value = false
  votes.value = []
  votedOutIndex.value = null
  votedOutPlayer.value = ''
}
</script>
