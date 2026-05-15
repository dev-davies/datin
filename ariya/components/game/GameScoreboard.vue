<template>
  <div class="scoreboard">
    <div
      v-for="entry in entries"
      :key="entry.key"
      class="scoreboard-item"
      :style="entry.style"
    >
      <span class="team-name">
        <template v-if="entry.labelPrefix">{{ entry.labelPrefix }} </template>{{ entry.label }}
      </span>
      <span class="team-score">{{ entry.score }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ScoreboardEntry } from '~/types/game'

defineProps<{
  entries: ScoreboardEntry[]
}>()
</script>
