<template>
  <GameCountdown
    :value="countdown"
    :message="`${teamName}, Get Ready!`"
    @skip="emit('skip')"
  />
</template>

<script setup lang="ts">
defineProps<{
  countdown: number
  teamName?: string
}>()

const emit = defineEmits<{
  skip: []
}>()
</script>
