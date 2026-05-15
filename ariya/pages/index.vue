<template>
  <main class="ariya-lobby">
    <div class="lobby-glow lobby-glow--purple" aria-hidden="true" />
    <div class="lobby-glow lobby-glow--gold" aria-hidden="true" />

    <div class="lobby-inner">
      <header class="lobby-header">
        <p class="lobby-eyebrow">Lagos nightlife</p>
        <h1 class="lobby-title">ARIYA</h1>
        <p class="lobby-subtitle">The Party Starts Here</p>
      </header>

      <section class="vip-carousel" aria-label="Available games">
        <article
          v-for="game in games"
          :key="game.slug"
          :class="['vip-card', `vip-card--${game.slug}`]"
        >
          <span class="vip-card__badge">{{ game.status }}</span>
          <h2 class="vip-card__title">{{ game.name }}</h2>
          <p class="vip-card__description">{{ game.description }}</p>
          <NuxtLink :to="game.href" class="vip-card__play">
            Play Now
          </NuxtLink>
        </article>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { lobbyGames } from '~/constants/games'

const games = lobbyGames

useHead({
  title: 'Ariya — The Party Starts Here'
})
</script>

<style scoped>
.ariya-lobby {
  --lobby-bg: #121212;
  --lobby-card: #1e1e1e;
  --lobby-gold: #ffd700;
  --lobby-purple: #9d50bb;
  --lobby-text: #f5f5f5;
  --lobby-muted: rgba(245, 245, 245, 0.62);

  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: var(--lobby-bg);
  color: var(--lobby-text);
}

.lobby-glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(80px);
  opacity: 0.45;
}

.lobby-glow--purple {
  top: -6rem;
  right: -4rem;
  width: 18rem;
  height: 18rem;
  background: var(--lobby-purple);
}

.lobby-glow--gold {
  bottom: -8rem;
  left: -6rem;
  width: 20rem;
  height: 20rem;
  background: var(--lobby-gold);
  opacity: 0.28;
}

.lobby-inner {
  position: relative;
  z-index: 1;
  width: min(1120px, 100%);
  margin: 0 auto;
  padding: clamp(2rem, 6vw, 4rem) clamp(1.25rem, 4vw, 2.5rem) 3rem;
}

.lobby-header {
  text-align: center;
  margin-bottom: clamp(2.5rem, 6vw, 3.5rem);
}

.lobby-eyebrow {
  margin: 0 0 0.75rem;
  color: var(--lobby-gold);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}

.lobby-title {
  margin: 0;
  font-size: clamp(3.5rem, 14vw, 6.5rem);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: 0.12em;
  color: var(--lobby-gold);
  text-shadow:
    0 0 12px rgba(255, 215, 0, 0.55),
    0 0 36px rgba(157, 80, 187, 0.35),
    0 0 64px rgba(255, 215, 0, 0.2);
  animation: title-pulse 3.5s ease-in-out infinite;
}

.lobby-subtitle {
  margin: 1rem 0 0;
  color: var(--lobby-muted);
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  font-weight: 500;
  letter-spacing: 0.06em;
}

.vip-carousel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 1.5rem;
}

@media (max-width: 720px) {
  .vip-carousel {
    display: flex;
    gap: 1.25rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: 1.25rem;
    padding-bottom: 0.75rem;
    margin-inline: -1.25rem;
    padding-inline: 1.25rem;
    -webkit-overflow-scrolling: touch;
  }

  .vip-carousel::-webkit-scrollbar {
    height: 6px;
  }

  .vip-carousel::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: linear-gradient(90deg, var(--lobby-purple), var(--lobby-gold));
  }

  .vip-card {
    flex: 0 0 min(88vw, 340px);
    scroll-snap-align: center;
  }
}

.vip-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.75rem 1.5rem 1.5rem;
  border: 1px solid rgba(255, 215, 0, 0.12);
  border-radius: 1.25rem;
  background: var(--lobby-card);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.45);
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;
}

.vip-card:hover {
  transform: translateY(-4px);
}

.vip-card--dat-tin:hover {
  border-color: rgba(255, 215, 0, 0.65);
  box-shadow:
    0 0 0 1px rgba(255, 215, 0, 0.35),
    0 12px 40px rgba(255, 215, 0, 0.12),
    0 24px 56px rgba(0, 0, 0, 0.5);
}

.vip-card--imposter:hover {
  border-color: rgba(157, 80, 187, 0.75);
  box-shadow:
    0 0 0 1px rgba(157, 80, 187, 0.4),
    0 12px 40px rgba(157, 80, 187, 0.18),
    0 24px 56px rgba(0, 0, 0, 0.5);
}

.vip-card__badge {
  align-self: flex-start;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: rgba(157, 80, 187, 0.2);
  border: 1px solid rgba(157, 80, 187, 0.45);
  color: #e9d4ff;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.vip-card--dat-tin .vip-card__badge {
  background: rgba(255, 215, 0, 0.12);
  border-color: rgba(255, 215, 0, 0.4);
  color: var(--lobby-gold);
}

.vip-card__title {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--lobby-text);
}

.vip-card__description {
  flex: 1;
  margin: 0;
  color: var(--lobby-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

.vip-card__play {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 3rem;
  border: none;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--lobby-gold) 0%, #f0c14a 45%, #c9a000 100%);
  color: #121212;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-decoration: none;
  text-transform: uppercase;
  box-shadow:
    0 4px 20px rgba(255, 215, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    filter 0.2s ease;
}

.vip-card__play:hover {
  transform: scale(1.02);
  filter: brightness(1.06);
  box-shadow:
    0 6px 28px rgba(255, 215, 0, 0.45),
    0 0 24px rgba(157, 80, 187, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

.vip-card__play:active {
  transform: scale(0.98);
}

.vip-card--imposter .vip-card__play {
  background: linear-gradient(135deg, #b86fd4 0%, var(--lobby-purple) 50%, #7a3d96 100%);
  color: #fff;
  box-shadow:
    0 4px 20px rgba(157, 80, 187, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.vip-card--imposter .vip-card__play:hover {
  box-shadow:
    0 6px 28px rgba(157, 80, 187, 0.55),
    0 0 20px rgba(255, 215, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
}

@keyframes title-pulse {
  0%,
  100% {
    text-shadow:
      0 0 12px rgba(255, 215, 0, 0.55),
      0 0 36px rgba(157, 80, 187, 0.35),
      0 0 64px rgba(255, 215, 0, 0.2);
  }

  50% {
    text-shadow:
      0 0 18px rgba(255, 215, 0, 0.75),
      0 0 48px rgba(157, 80, 187, 0.5),
      0 0 80px rgba(255, 215, 0, 0.35);
  }
}
</style>
