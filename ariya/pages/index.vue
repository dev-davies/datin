<template>
  <main class="page-shell">
    <div class="container">
      <nav class="nav-row" aria-label="Main navigation">
        <NuxtLink class="brand-mark" to="/">
          <span class="brand-icon">A</span>
          <span>Ariya</span>
        </NuxtLink>
        <span class="back-link">Party games lobby</span>
      </nav>

      <section class="hero-grid">
        <div class="hero-panel">
          <p class="eyebrow">Play together</p>
          <h1 class="hero-title">Ariya</h1>
          <p class="hero-copy">
            A dark themed home for loud laughs, quick rounds, and party games with their own vibe.
            Pick a game, pass the phone, and let the wahala begin.
          </p>
          <div class="action-row">
            <NuxtLink class="btn" to="/games/dat-tin">Start Dat Tin</NuxtLink>
            <NuxtLink class="btn secondary" to="/games/imposter">Find Imposter</NuxtLink>
          </div>
        </div>

        <div class="game-list" aria-label="Available games">
          <NuxtLink v-for="game in games" :key="game.slug" :to="game.href" :class="['game-card', game.slug]">
            <article>
              <h2>{{ game.name }}</h2>
              <p>{{ game.description }}</p>
              <span>{{ game.status }}</span>
            </article>
          </NuxtLink>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
const games = [
  {
    name: 'Dat Tin',
    slug: 'dat-tin',
    href: '/games/dat-tin',
    description: 'A Naija-flavoured word guessing game with forbidden words, teams, timers, and plenty tension.',
    status: 'Word party game'
  },
  {
    name: 'Imposter',
    slug: 'imposter',
    href: '/games/imposter',
    description: 'Pass-and-play hidden role game where everyone knows the word except one sharp imposter.',
    status: 'Hidden role game'
  }
]
</script>
