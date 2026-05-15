<template>
  <div v-if="visible" class="pause-overlay">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
    <div class="pause-actions">
      <button class="btn btn-primary pause-continue" type="button" @click="emit('resume')">
        {{ resumeLabel }}
      </button>
      <button class="btn btn-secondary pause-quit" type="button" @click="emit('quit')">
        {{ quitLabel }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    visible: boolean
    title?: string
    subtitle?: string
    resumeLabel?: string
    quitLabel?: string
  }>(),
  {
    title: 'Oya Wait!',
    subtitle: 'Game Paused',
    resumeLabel: 'Oya Continue ▶️',
    quitLabel: 'Quit to Menu'
  }
)

const emit = defineEmits<{
  resume: []
  quit: []
}>()
</script>

<style scoped>
.pause-overlay {
  display: flex;
  position: fixed;
  inset: 0;
  z-index: 3000;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.9);
  text-align: center;
}

.pause-overlay h1 {
  margin-bottom: 2rem;
  color: var(--yellow-400);
  font-size: 3rem;
}

.pause-overlay p {
  margin-bottom: 2rem;
  color: var(--white);
  font-size: 1.5rem;
}

.pause-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.pause-continue {
  max-width: 20rem;
  font-size: 1.5rem;
  padding: 1rem 3rem;
}

.pause-quit {
  max-width: 20rem;
  font-size: 1.25rem;
  padding: 0.75rem 2rem;
}
</style>
