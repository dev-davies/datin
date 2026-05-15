<template>
  <div class="title-screen">
    <h1>Review Round</h1>
    <div class="review-box">
      <h3>Check Scores</h3>
      <ul class="review-list">
        <li v-for="(item, index) in roundCards" :key="`${item.word}-${index}`" class="review-item">
          <span class="review-word">{{ item.word }}</span>
          <button
            :class="['status-btn', item.status === 'correct' ? 'correct' : 'pass']"
            type="button"
            @click="emit('toggleStatus', index)"
          >
            {{ item.status === 'correct' ? 'Correct' : 'Pass' }}
          </button>
        </li>
      </ul>
    </div>
    <div class="review-score-line">
      Score: <span class="review-score-value">{{ reviewScore }}</span>
    </div>
    <button class="btn btn-primary" type="button" @click="emit('confirm')">Confirm Score</button>
  </div>
</template>

<script setup lang="ts">
import type { DatTinRoundCard } from '~/composables/useDatTinGame'

defineProps<{
  roundCards: DatTinRoundCard[]
  reviewScore: number
}>()

const emit = defineEmits<{
  toggleStatus: [index: number]
  confirm: []
}>()
</script>

<style scoped>
.review-box {
  width: 100%;
  max-width: 24rem;
  max-height: 60vh;
  padding: 1rem;
  border-radius: 0.5rem;
  background: var(--green-800);
  overflow-y: auto;
}

.review-box h3 {
  margin-top: 0;
  color: var(--yellow-400);
  text-align: center;
}

.review-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.review-score-line {
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.review-score-value {
  color: var(--yellow-400);
}
</style>
