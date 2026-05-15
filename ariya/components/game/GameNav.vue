<template>
  <nav :class="navClass" aria-label="Game navigation">
    <NuxtLink class="brand-mark" to="/">
      <span class="brand-icon">A</span>
      <span>Ariya</span>
    </NuxtLink>
    <NuxtLink class="back-link" to="/">Back to lobby</NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import type { GameTheme } from '~/types/game'

const props = defineProps<{
  theme: GameTheme
}>()

const navClass = computed(() => (props.theme === 'imposter' ? 'imposter-nav' : 'nav-row'))
</script>
