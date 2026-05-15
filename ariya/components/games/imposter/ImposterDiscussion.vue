<template>
  <section class="imposter-card discussion-card">
    <div class="phase-tag pink">Phase 03</div>
    <h2><span>💬</span> Discussion</h2>
    <p>Ask questions about the secret word. Find out who doesn't know it!</p>
    <div class="discuss-box">Discuss!</div>
    <button class="neo-btn danger full" type="button" @click="emit('vote')">Stop & Vote Now</button>
  </section>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  vote: []
}>()
</script>
