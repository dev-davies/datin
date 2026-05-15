<template>
  <div class="player-list-editor">
    <h2>{{ heading }}</h2>
    <div class="player-entry">
      <input
        :value="modelValue"
        :placeholder="placeholder"
        type="text"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        @keyup.enter="emit('add')"
      >
      <button class="neo-btn primary" type="button" @click="emit('add')">{{ addLabel }}</button>
    </div>

    <ul class="player-list">
      <li v-for="(player, index) in players" :key="`${player}-${index}`">
        <span>{{ player }}</span>
        <button class="neo-btn danger small" type="button" @click="emit('remove', index)">X</button>
      </li>
    </ul>

    <p v-if="players.length > 0 && players.length < minPlayers" class="need-players">
      {{ needMoreMessage ?? `Need at least ${minPlayers} players (${players.length}/${minPlayers})` }}
    </p>
    <button
      v-else-if="players.length === 0"
      class="neo-btn secondary full"
      type="button"
      style="margin-top: 1rem;"
      @click="emit('confirm')"
    >
      Quick Start (Default Players)
    </button>
    <button
      v-else
      class="neo-btn success full"
      type="button"
      style="margin-top: 1rem;"
      @click="emit('confirm')"
    >
      {{ confirmLabel }}
    </button>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    players: string[]
    modelValue: string
    heading?: string
    placeholder?: string
    addLabel?: string
    confirmLabel?: string
    minPlayers?: number
    needMoreMessage?: string
  }>(),
  {
    heading: 'Add Players',
    placeholder: 'ENTER PLAYER NAME...',
    addLabel: 'Add',
    confirmLabel: 'Start Game',
    minPlayers: 3
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  add: []
  remove: [index: number]
  confirm: []
}>()
</script>
