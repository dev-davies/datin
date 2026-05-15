<template>
  <section class="imposter-card resolution-card">
    <h2>Game Over!</h2>
    <div class="result-box">
      <p>The group voted out: <strong class="red">{{ votedOutPlayer }}</strong></p>
      <p>The actual Imposter was: <strong class="green">{{ actualImposter }}</strong></p>
    </div>
    <h1 v-if="crewmatesWin" class="crewmates-win">Crewmates Win!</h1>
    <h1 v-else class="imposter-win">Imposter Wins!</h1>
    <div class="secret-word">
      <p>The secret word was</p>
      <strong>{{ secretWord }}</strong>
    </div>
    <button class="neo-btn primary full" type="button" @click="emit('reset')">Play Again</button>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  votedOutPlayer: string
  actualImposter: string
  secretWord: string
  crewmatesWin: boolean
}>()

const emit = defineEmits<{
  reset: []
}>()
</script>
