<template>
  <div v-if="layout === 'classic'" class="title-screen">
    <h1>
      {{ title }}
      <span v-if="titleAccent" style="font-size: 75%">{{ titleAccent }}</span>
    </h1>
    <div class="instructions-box">
      <div class="instructions-heading">How To Play</div>
      <GameRuleList :rules="rules" layout="classic" :use-html="true" />
      <button class="btn btn-primary btn-play-now" type="button" @click="emit('start')">
        {{ playLabel }}
      </button>
    </div>
  </div>

  <section v-else :class="['game-welcome', variant]">
    <header class="game-welcome-header">
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <h1 class="game-welcome-title">
        {{ title }}
        <span v-if="titleAccent" class="game-welcome-accent">{{ titleAccent }}</span>
      </h1>
      <p v-if="description" class="game-description">{{ description }}</p>
    </header>

    <div class="game-welcome-rules">
      <h2 class="game-welcome-rules-heading">How to play</h2>
      <GameRuleList :rules="rules" :variant="variant" />
    </div>

    <button :class="playButtonClass" type="button" @click="emit('start')">
      {{ playLabel }}
    </button>
  </section>
</template>

<script setup lang="ts">
import type { GameRule, GameTheme } from '~/types/game'

const props = withDefaults(
  defineProps<{
    title: string
    rules: GameRule[]
    variant: GameTheme
    layout?: 'card' | 'classic'
    eyebrow?: string
    titleAccent?: string
    description?: string
    playLabel?: string
  }>(),
  {
    layout: 'card',
    playLabel: 'Play now'
  }
)

const emit = defineEmits<{
  start: []
}>()

const playButtonClass = computed(() => {
  if (props.variant === 'imposter') return 'neo-btn success full'
  return 'btn dat-primary game-welcome-play'
})
</script>
