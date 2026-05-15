<template>
  <div class="title-screen">
    <h1>Round Over!</h1>
    <div class="winner-display" :style="leaderStyle">
      <GameConfetti />
      <div class="trophy">🏆</div>
      <div class="winner-banner">Current Leader</div>
      <div class="winner-team">{{ leadingTeam?.name }}</div>
      <div class="winner-team-score">{{ leadingTeam?.score }} points</div>
    </div>
    <GameScoreboard :entries="scoreboardEntries" />
    <button class="btn btn-primary next-round-btn" type="button" @click="emit('nextRound')">
      {{ nextRoundLabel }}
    </button>
    <button class="btn btn-secondary new-game-btn" type="button" @click="emit('newGame')">New Game</button>
  </div>
</template>

<script setup lang="ts">
import type { ScoreboardEntry } from '~/types/game'
import type { DatTinTeam } from '~/composables/useDatTinGame'

const props = defineProps<{
  teams: DatTinTeam[]
  leadingTeam?: DatTinTeam
  nextRoundLabel: string
  leaderStyle: Record<string, string>
  scoreboardItemStyle: (team: DatTinTeam) => Record<string, string>
}>()

const emit = defineEmits<{
  nextRound: []
  newGame: []
}>()

const scoreboardEntries = computed<ScoreboardEntry[]>(() =>
  props.teams.map(team => ({
    key: team.name,
    label: team.name,
    score: team.score,
    style: props.scoreboardItemStyle(team)
  }))
)
</script>

<style scoped>
.next-round-btn,
.new-game-btn {
  max-width: 20rem;
}

.new-game-btn {
  margin-top: 1rem;
}

.winner-team-score {
  margin-top: 0.5rem;
  color: var(--green-800);
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
