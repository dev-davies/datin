<template>
  <section class="imposter-welcome">
    <ImposterHeader />
    <GameWelcome
      variant="imposter"
      title="Imposter Hunt"
      description="One player is faking it. Everyone else knows the secret word. Can you smoke them out?"
      :rules="imposterRules"
      play-label="Start setup"
      @start="emit('start')"
    />
  </section>
</template>

<script setup lang="ts">
import { imposterRules } from '~/constants/games'

const emit = defineEmits<{
  start: []
}>()
</script>
