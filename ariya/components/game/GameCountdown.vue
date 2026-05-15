<template>
  <div class="countdown-screen">
    <div class="countdown-number">{{ value }}</div>
    <div class="countdown-message">{{ message }}</div>
    <button class="btn-skip" type="button" @click="emit('skip')">{{ skipLabel }}</button>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    value: number
    message: string
    skipLabel?: string
  }>(),
  { skipLabel: 'Play Now' }
)

const emit = defineEmits<{
  skip: []
}>()
</script>
