<template>
  <section class="imposter-card voting-card">
    <GameHandoff
      :revealed="isRoleVisible"
      :player-name="currentPlayer"
      heading="Pass to vote secretly"
      reveal-label="Ready to vote"
      @reveal="emit('ready')"
    >
      <div class="vote-panel">
        <h2>Who is the Imposter?</h2>
        <button
          v-for="(player, index) in players"
          :key="`${player}-vote-${index}`"
          class="neo-btn vote"
          type="button"
          :disabled="index === voterIndex"
          @click="emit('vote', index)"
        >
          <span>{{ player }}</span>
          <small v-if="index === voterIndex">You</small>
        </button>
      </div>
    </GameHandoff>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  players: string[]
  currentPlayer: string
  voterIndex: number
  isRoleVisible: boolean
}>()

const emit = defineEmits<{
  ready: []
  vote: [index: number]
}>()
</script>
