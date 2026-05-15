<template>
  <div :class="['gidigidi-container', `flash-${flashState}`]">
    <!-- Setup State -->
    <div v-if="gameState === 'setup'" class="setup-state">
      <div class="icon-instruction">
        <span class="icon">📱➡️🤕</span>
        <p>Hold phone to your forehead in landscape mode</p>
      </div>
      <button class="start-btn" @click="requestMotionPermission">
        Tap to Start
      </button>
    </div>

    <!-- Playing State -->
    <div v-else-if="gameState === 'playing'" class="playing-state">
      <div class="timer">{{ timeLeft }}</div>
      <div class="word-display">
        <h1>{{ currentWord }}</h1>
      </div>
    </div>

    <!-- Finished State -->
    <div v-else-if="gameState === 'finished'" class="finished-state">
      <h2>Time's Up!</h2>
      <div class="final-score">
        Score: <span>{{ score }}</span>
      </div>
      <button class="play-again-btn" @click="resetGame">
        Play Again
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGidigidiGame } from '~/composables/useGidigidiGame'

const {
  gameState,
  currentWord,
  score,
  timeLeft,
  flashState,
  requestMotionPermission,
  resetGame
} = useGidigidiGame()
</script>

<style scoped>
.gidigidi-container {
  background-color: #121212; /* Deep Charcoal */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: system-ui, -apple-system, sans-serif;
  color: white;
  transition: background-color 0.4s ease;
  overflow: hidden;
}

/* Dynamic Flashes */
.gidigidi-container.flash-correct {
  background-color: #22c55e; /* Vibrant Green */
}

.gidigidi-container.flash-pass {
  background-color: #ef4444; /* Bright Red */
}

/* Setup State */
.setup-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  text-align: center;
  padding: 2rem;
}

.icon-instruction {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.icon {
  font-size: 5rem;
}

.icon-instruction p {
  font-size: 1.2rem;
  color: #A0A0A0;
  max-width: 250px;
}

.start-btn {
  background-color: #FFD700; /* Owambe Gold */
  color: #121212;
  font-size: 2rem;
  font-weight: 900;
  padding: 1.5rem 3rem;
  border-radius: 24px;
  border: none;
  box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: transform 0.2s, box-shadow 0.2s;
}

.start-btn:active {
  transform: scale(0.95);
  box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
}

/* Playing State */
.playing-state {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.timer {
  position: absolute;
  top: 2rem;
  width: 100%;
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  color: #FFD700;
  text-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
}

.word-display {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
}

.word-display h1 {
  font-size: 6vw; /* Massive responsive text */
  font-weight: 900;
  margin: 0;
  line-height: 1.1;
  text-transform: uppercase;
  word-break: break-word;
}

@media (max-width: 768px) {
  .word-display h1 {
    font-size: 12vw;
  }
}

/* Finished State */
.finished-state {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.finished-state h2 {
  font-size: 3rem;
  margin: 0;
  color: #FFD700;
}

.final-score {
  font-size: 2rem;
  color: #A0A0A0;
}

.final-score span {
  font-size: 4rem;
  font-weight: 900;
  color: white;
  display: block;
}

.play-again-btn {
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.play-again-btn:active {
  background-color: white;
  color: #121212;
}
</style>
