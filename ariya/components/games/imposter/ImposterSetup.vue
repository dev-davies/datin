<template>
  <section class="imposter-card">
    <ImposterHeader />
    <div class="phase-tag blue">Setup</div>
    <h2>Select Category</h2>
    <div class="category-grid">
      <button
        v-for="category in categories"
        :key="category"
        :class="['imposter-option', { active: selectedCategory === category }]"
        type="button"
        @click="emit('update:selectedCategory', category)"
      >
        {{ category }}
      </button>
    </div>

    <hr>

    <PlayerListEditor
      :players="players"
      :model-value="newPlayerName"
      @update:model-value="emit('update:newPlayerName', $event)"
      @add="emit('addPlayer')"
      @remove="emit('removePlayer', $event)"
      @confirm="emit('startGame')"
    />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  categories: string[]
  selectedCategory: string
  players: string[]
  newPlayerName: string
}>()

const emit = defineEmits<{
  'update:selectedCategory': [category: string]
  'update:newPlayerName': [name: string]
  addPlayer: []
  removePlayer: [index: number]
  startGame: []
}>()
</script>
