<template>
  <ul :class="listClass">
    <li v-for="(rule, index) in rules" :key="index" :class="itemClass">
      <span :class="iconClass" aria-hidden="true">{{ rule.icon }}</span>
      <span v-if="rule.html && useHtml" :class="textClass" v-html="rule.html" />
      <span v-else :class="textClass">{{ rule.text }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { GameRule, GameTheme } from '~/types/game'

const props = withDefaults(
  defineProps<{
    rules: GameRule[]
    variant?: GameTheme | 'default'
    layout?: 'card' | 'classic'
    useHtml?: boolean
  }>(),
  {
    variant: 'default',
    layout: 'card',
    useHtml: false
  }
)

const listClass = computed(() => {
  if (props.layout === 'classic') return 'instructions-list'
  return ['game-rules', props.variant]
})

const itemClass = computed(() => (props.layout === 'classic' ? 'instruction-item' : 'game-rule'))
const iconClass = computed(() => (props.layout === 'classic' ? 'instruction-icon' : 'game-rule-icon'))
const textClass = computed(() => (props.layout === 'classic' ? 'instruction-text' : 'game-rule-text'))
</script>
