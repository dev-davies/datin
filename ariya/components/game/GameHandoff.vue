<template>
  <div v-if="!revealed" class="handoff">
    <h2>{{ heading }}</h2>
    <h1>{{ playerName }}</h1>
    <p v-if="hint">{{ hint }}</p>
    <button :class="revealButtonClass" type="button" @click="emit('reveal')">
      {{ revealLabel }}
    </button>
  </div>
  <div v-else>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { GameTheme } from '~/types/game'

const props = withDefaults(
  defineProps<{
    revealed: boolean
    playerName: string
    heading: string
    revealLabel: string
    hint?: string
    theme?: GameTheme
    revealButtonVariant?: 'primary' | 'default'
  }>(),
  {
    theme: 'imposter',
    revealButtonVariant: 'primary'
  }
)

const emit = defineEmits<{
  reveal: []
}>()

const revealButtonClass = computed(() => {
  if (props.theme === 'imposter') {
    return ['neo-btn', props.revealButtonVariant === 'primary' ? 'primary' : '', 'full'].filter(Boolean)
  }
  return ['btn', 'btn-primary']
})
</script>
