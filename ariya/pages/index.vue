<script setup lang="ts">
import { lobbyGames } from '~/constants/games'
</script>

<template>
  <main class="ariya-lobby">
    <div class="header">
      <h1 class="logo">ARIYA</h1>
      <p class="subtitle">The Party Starts Here</p>
    </div>

    <div class="carousel-container">
      <div class="carousel">
        <NuxtLink 
          v-for="game in lobbyGames" 
          :key="game.slug" 
          :to="game.href" 
          class="game-card"
          :class="`theme-${game.slug}`"
        >
          <div class="card-content">
            <h2 class="game-title">{{ game.name }}</h2>
            <p class="game-desc">{{ game.description || 'Tap to start the vibe' }}</p>
            <div class="play-btn">Play Now</div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.ariya-lobby {
  background-color: #121212;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  font-family: system-ui, -apple-system, sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.logo {
  color: #FFD700;
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  margin: 0;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
}

.subtitle {
  color: #A0A0A0;
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.carousel-container {
  width: 100%;
  padding-bottom: 2rem;
}

.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding: 2rem 7.5%;
  gap: 1.5rem;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.game-card {
  scroll-snap-align: center;
  flex: 0 0 85%;
  max-width: 450px;
  background-color: #1E1E1E;
  border-radius: 24px;
  padding: 2.5rem 2rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.game-card:hover {
  transform: translateY(-8px);
}

.game-card:active {
  transform: translateY(-4px) scale(0.98);
}

.theme-dat-tin { 
  border-color: #FFD700; 
  box-shadow: 0 15px 35px rgba(255, 215, 0, 0.15); 
}
.theme-imposter { 
  border-color: #9D50BB; 
  box-shadow: 0 15px 35px rgba(157, 80, 187, 0.15); 
}

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.game-title {
  font-size: 2.8rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
}

.theme-dat-tin .game-title { color: #FFD700; }
.theme-imposter .game-title { color: #9D50BB; }

.game-desc {
  color: #D3D3D3;
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: auto;
  padding-bottom: 2rem;
}

.play-btn {
  text-align: center;
  padding: 1.2rem;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.3),
    inset 0 2px 2px rgba(255, 255, 255, 0.2),
    inset 0 -2px 2px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.theme-dat-tin .play-btn { 
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 215, 0, 0.05) 100%);
  color: #FFD700;
  border-color: rgba(255, 215, 0, 0.2);
}

.theme-imposter .play-btn { 
  background: linear-gradient(135deg, rgba(157, 80, 187, 0.2) 0%, rgba(157, 80, 187, 0.05) 100%);
  color: #9D50BB;
  border-color: rgba(157, 80, 187, 0.2);
}

/* Desktop Responsiveness */
@media (min-width: 768px) {
  .carousel {
    padding: 2rem calc(50% - 200px); /* Center a 400px card */
    gap: 2rem;
  }
  .game-card {
    flex: 0 0 400px;
    min-height: 450px;
  }
}
</style>