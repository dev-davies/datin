<template>
  <main :class="['game-page', `${theme}-theme`]">
    <div :class="wrapClass">
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
import type { GameTheme } from '~/types/game'

const props = withDefaults(
  defineProps<{
    theme: GameTheme
    narrow?: boolean
  }>(),
  { narrow: false }
)

const wrapClass = computed(() => {
  if (props.theme === 'imposter' || props.narrow) return 'imposter-wrap'
  return 'container'
})
</script>
