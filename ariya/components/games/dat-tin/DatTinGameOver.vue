<template>
  <div class="title-screen">
    <h1>Game Over!</h1>
    <div class="final-winner-display">
      <GameConfetti />
      <div class="final-trophy">🏆</div>
      <div class="victory-message">Champion!</div>
      <div class="final-winner-team">{{ champion?.name }}</div>
      <div class="final-score">{{ champion?.score }} Total Points</div>
    </div>
    <GameScoreboard :entries="scoreboardEntries" />
    <button class="btn btn-primary play-again-btn" type="button" @click="emit('playAgain')">Play Again</button>
  </div>
</template>

<script setup lang="ts">
import type { ScoreboardEntry } from '~/types/game'
import type { DatTinTeam } from '~/composables/useDatTinGame'

const props = defineProps<{
  teams: DatTinTeam[]
  champion?: DatTinTeam
  scoreboardItemStyle: (team: DatTinTeam) => Record<string, string>
  medalForPlace: (index: number) => string
}>()

const emit = defineEmits<{
  playAgain: []
}>()

const scoreboardEntries = computed<ScoreboardEntry[]>(() =>
  props.teams.map((team, index) => ({
    key: team.name,
    label: team.name,
    score: team.score,
    labelPrefix: props.medalForPlace(index),
    style: props.scoreboardItemStyle(team)
  }))
)
</script>

<style scoped>
.play-again-btn {
  max-width: 20rem;
  margin-top: 1rem;
}
</style>
