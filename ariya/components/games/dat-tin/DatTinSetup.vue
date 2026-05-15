<template>
  <div class="title-screen">
    <h1>Dat Tin <span style="font-size: 75%">🇳🇬</span></h1>
    <div class="rules">
      <h2 style="margin-bottom: 0">Select Teams</h2>
    </div>
    <div class="team-setup-box">
      <h2>Select Decks</h2>
      <div class="deck-selector">
        <button
          :class="['deck-option', { selected: isDeckSelected('naija') }]"
          type="button"
          @click="emit('toggleDeck', 'naija')"
        >
          <span>🇳🇬</span> Naija
        </button>
        <button
          :class="['deck-option', { selected: isDeckSelected('global') }]"
          type="button"
          @click="emit('toggleDeck', 'global')"
        >
          <span>🌍</span> Global
        </button>
      </div>

      <h2>Select number of teams to start</h2>
      <div class="team-count-selector">
        <button
          v-for="count in teamCounts"
          :key="count"
          class="team-count-btn"
          type="button"
          @click="emit('startWithTeams', count)"
        >
          {{ count }}
        </button>
      </div>

      <h2>Round Duration</h2>
      <div class="timer-selector">
        <button
          v-for="option in timerOptions"
          :key="option.value"
          :class="['timer-btn', { selected: roundDuration === option.value }]"
          type="button"
          @click="emit('setDuration', option.value)"
        >
          {{ option.title }}<br>
          <span class="timer-subtitle">{{ option.subtitle }}</span>
        </button>
      </div>

      <p v-if="loadError" class="dat-setup-error">{{ loadError }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { datTinTimerOptions, type DeckKey } from '~/composables/useDatTinGame'

defineProps<{
  roundDuration: number
  loadError: string
  isDeckSelected: (deck: DeckKey) => boolean
}>()

const emit = defineEmits<{
  toggleDeck: [deck: DeckKey]
  startWithTeams: [count: number]
  setDuration: [seconds: number]
}>()

const teamCounts = [2, 3, 4]
const timerOptions = datTinTimerOptions
</script>

<style scoped>
.timer-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.timer-btn {
  flex: 1;
  min-width: 45%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 2px solid var(--gray-300);
  background: var(--green-900);
  color: var(--gray-300);
  font-weight: 700;
  cursor: pointer;
}

.timer-subtitle {
  font-size: 0.8em;
  font-weight: 400;
}

.deck-option {
  font: inherit;
}

.dat-setup-error {
  margin-top: 1rem;
  color: #fecaca;
  font-weight: 700;
  text-align: center;
}
</style>
