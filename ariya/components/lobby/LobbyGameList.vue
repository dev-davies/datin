<template>
  <div class="game-list" aria-label="Available games">
    <NuxtLink
      v-for="game in games"
      :key="game.slug"
      :to="game.href"
      :class="['game-card', game.slug]"
    >
      <article>
        <h2>{{ game.name }}</h2>
        <p>{{ game.description }}</p>
        <span>{{ game.status }}</span>
      </article>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { lobbyGames } from '~/constants/games'

const games = lobbyGames
</script>
