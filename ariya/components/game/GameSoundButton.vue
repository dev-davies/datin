<template>
  <button class="sound-btn" type="button" @click="emit('toggle')">
    {{ icon }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
}>()

const emit = defineEmits<{
  toggle: []
}>()
</script>
