<template>
  <div class="dat-tin-app">
    <GameLobbyLink />
    <GameSoundButton :icon="soundIcon" @toggle="onToggleSound" />

    <main>
      <GameWelcome
        v-if="phase === 'welcome'"
        variant="dat-tin"
        layout="classic"
        title="Dat Tin"
        title-accent="🇳🇬"
        :rules="datTinRules"
        play-label="Play Now"
        @start="startFromWelcome"
      />

      <DatTinSetup
        v-else-if="phase === 'setup'"
        :round-duration="roundDuration"
        :load-error="loadError"
        :is-deck-selected="isDeckSelected"
        @toggle-deck="toggleDeck"
        @start-with-teams="setupAndStartGame"
        @set-duration="setRoundDuration"
      />

      <DatTinCountdown
        v-else-if="phase === 'countdown'"
        :countdown="countdown"
        :team-name="currentTeam?.name"
        @skip="skipCountdown"
      />

      <DatTinPlaying
        v-else-if="phase === 'playing'"
        :team-name="currentTeam?.name"
        :team-indicator-style="teamIndicatorStyle(currentTeam)"
        :round-score="roundScore"
        :score-anim-key="scoreAnimKey"
        :time-left="timeLeft"
        :card="currentCard"
        :card-anim-key="cardAnimKey"
        :is-paused="isPaused"
        @pass="handlePass"
        @correct="handleCorrect"
        @toggle-pause="togglePause"
        @quit="quitGame"
      />

      <DatTinReview
        v-else-if="phase === 'review'"
        :round-cards="roundCards"
        :review-score="reviewScore"
        @toggle-status="toggleCardStatus"
        @confirm="confirmScore"
      />

      <DatTinRoundOver
        v-else-if="phase === 'roundOver'"
        :teams="sortedTeams"
        :leading-team="leadingTeam"
        :next-round-label="nextRoundLabel"
        :leader-style="leaderGradientStyle(leadingTeam)"
        :scoreboard-item-style="scoreboardItemStyle"
        @next-round="startCountdown"
        @new-game="resetGame"
      />

      <DatTinGameOver
        v-else
        :teams="sortedTeams"
        :champion="champion"
        :scoreboard-item-style="scoreboardItemStyle"
        :medal-for-place="medalForPlace"
        @play-again="resetGame"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { datTinRules } from '~/constants/games'

const sound = useGameSound()
const soundIcon = ref('🔊')

const {
  phase,
  loadError,
  roundDuration,
  roundCards,
  roundScore,
  timeLeft,
  countdown,
  isPaused,
  cardAnimKey,
  scoreAnimKey,
  currentCard,
  currentTeam,
  reviewScore,
  sortedTeams,
  leadingTeam,
  champion,
  nextRoundLabel,
  isDeckSelected,
  startFromWelcome,
  toggleDeck,
  setRoundDuration,
  setupAndStartGame,
  startCountdown,
  skipCountdown,
  handleCorrect,
  handlePass,
  togglePause,
  toggleCardStatus,
  confirmScore,
  resetGame,
  quitGame,
  teamIndicatorStyle,
  scoreboardItemStyle,
  leaderGradientStyle,
  medalForPlace
} = useDatTinGame(sound)

function onToggleSound() {
  soundIcon.value = sound.toggle()
}

useHead({
  title: 'Dat Tin 🇳🇬',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap'
    }
  ],
  script: [{ src: '/lib/splitting.min.js', defer: true }]
})
</script>
