<template>
  <NuxtLink :class="linkClass" to="/">{{ label }}</NuxtLink>
</template>

<script setup lang="ts">
import type { GameTheme } from '~/types/game'

const props = withDefaults(
  defineProps<{
    theme?: GameTheme
    label?: string
  }>(),
  {
    theme: 'dat-tin',
    label: '← Ariya lobby'
  }
)

const linkClass = computed(() =>
  props.theme === 'dat-tin' ? 'dat-tin-lobby-link' : 'game-lobby-link'
)
</script>
