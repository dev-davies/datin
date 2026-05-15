<template>
  <section class="imposter-card">
    <GameHandoff
      :revealed="isRoleVisible"
      :player-name="currentPlayer"
      heading="Pass the device to"
      :reveal-label="`I am ${currentPlayer}`"
      hint="Make sure no one else is looking!"
      @reveal="emit('reveal')"
    >
      <h2 class="role-title"><span>🎯</span> Your Role</h2>
      <div v-if="isImposter" class="role-box imposter">
        <h3>🔪 Imposter</h3>
        <p>Try to blend in. You do not know the secret word.</p>
      </div>
      <div v-else class="role-box crewmate">
        <h3>🧑‍🚀 Crewmate</h3>
        <p>The secret word is</p>
        <strong>{{ secretWord }}</strong>
      </div>
      <button class="neo-btn danger full" type="button" @click="emit('continue')">Hide & Continue</button>
    </GameHandoff>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  currentPlayer: string
  isRoleVisible: boolean
  isImposter: boolean
  secretWord: string
}>()

const emit = defineEmits<{
  reveal: []
  continue: []
}>()
</script>
