<template>
  <div class="game-screen">
    <div class="current-team-indicator" :style="teamIndicatorStyle">
      {{ teamName }}'s Turn
    </div>

    <header class="game-header">
      <div class="game-header-controls">
        <button class="btn-icon" type="button" @click="emit('togglePause')">⏸️</button>
        <button class="btn-quit" type="button" @click="emit('quit')">Quit</button>
      </div>
      <div class="score-display">
        <span class="label">Round Score:</span>
        <span :key="scoreAnimKey" class="value animated tada">{{ roundScore }}</span>
      </div>
      <span class="timer" :class="{ 'low-time': timeLeft <= 10 }">{{ timeLeft }}</span>
    </header>

    <GamePauseOverlay
      :visible="isPaused"
      @resume="emit('togglePause')"
      @quit="emit('quit')"
    />

    <div class="card-container">
      <div :key="cardAnimKey" class="game-card animated fadeInUp">
        <div v-if="card" class="card-section target">
          <p class="label">Dat Tin</p>
          <h2 ref="targetWordRef" :key="cardAnimKey" class="target-word" data-splitting>
            {{ card.targetWord }}
          </h2>
        </div>
        <div v-if="card" class="card-section forbidden">
          <p class="label">No Talk Am!</p>
          <ul class="forbidden-words-list">
            <li v-for="word in card.forbiddenWords" :key="word" class="forbidden-word">
              {{ word }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <footer class="game-footer">
      <button class="btn btn-pass" type="button" @click="emit('pass')">Pass</button>
      <button class="btn btn-primary" type="button" @click="emit('correct')">Correct!</button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { DatTinCard } from '~/composables/useDatTinGame'

const props = defineProps<{
  teamName?: string
  teamIndicatorStyle: Record<string, string>
  roundScore: number
  scoreAnimKey: number
  timeLeft: number
  card?: DatTinCard
  cardAnimKey: number
  isPaused: boolean
}>()

const emit = defineEmits<{
  pass: []
  correct: []
  togglePause: []
  quit: []
}>()

const targetWordRef = ref<HTMLElement | null>(null)

watch(
  () => [props.card?.targetWord, props.cardAnimKey],
  async () => {
    await nextTick()
    const splitting = (window as Window & { Splitting?: (options: { target: Element; by: string }) => void }).Splitting
    if (!targetWordRef.value || !splitting) return
    splitting({ target: targetWordRef.value, by: 'chars' })
  },
  { immediate: true }
)
</script>

<style scoped>
.game-header-controls {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.game-card.animated {
  animation-duration: 400ms;
}

.score-display .value.animated {
  animation-duration: 800ms;
  display: inline-block;
}
</style>
