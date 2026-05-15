<template>
  <nav :class="navClass" aria-label="Game navigation">
    <NuxtLink class="back-arrow" to="/" aria-label="Back to Lobby">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import type { GameTheme } from '~/types/game'

const props = defineProps<{
  theme: GameTheme
}>()

const navClass = computed(() => (props.theme === 'imposter' ? 'imposter-nav' : 'nav-row'))
</script>
