<template>
  <GameShell theme="imposter" narrow>
    <GameLobbyLink theme="imposter" />
    <GameNav theme="imposter" />

    <ImposterWelcome v-if="phase === 'welcome'" @start="goToSetup" />

    <ImposterSetup
      v-else-if="phase === 'setup'"
      :categories="categoryNames"
      :selected-category="selectedCategory"
      :players="players"
      :new-player-name="newPlayerName"
      @update:selected-category="selectedCategory = $event"
      @update:new-player-name="newPlayerName = $event"
      @add-player="addPlayer"
      @remove-player="removePlayer"
      @start-game="startGame"
    />

    <ImposterPassReveal
      v-else-if="phase === 'passReveal'"
      :current-player="currentPlayer"
      :is-role-visible="isRoleVisible"
      :is-imposter="currentPlayerIndex === imposterIndex"
      :secret-word="currentWord"
      @reveal="isRoleVisible = true"
      @continue="nextPlayerReveal"
    />

    <ImposterDiscussion v-else-if="phase === 'discussion'" @vote="startVoting" />

    <ImposterVoting
      v-else-if="phase === 'voting'"
      :players="players"
      :current-player="currentPlayer"
      :voter-index="currentPlayerIndex"
      :is-role-visible="isRoleVisible"
      @ready="isRoleVisible = true"
      @vote="castVote"
    />

    <ImposterResolution
      v-else
      :voted-out-player="votedOutPlayer"
      :actual-imposter="actualImposter"
      :secret-word="currentWord"
      :crewmates-win="votedOutIndex === imposterIndex"
      @reset="resetGame"
    />
  </GameShell>
</template>

<script setup lang="ts">
const {
  phase,
  selectedCategory,
  players,
  newPlayerName,
  currentWord,
  imposterIndex,
  currentPlayerIndex,
  isRoleVisible,
  votedOutIndex,
  votedOutPlayer,
  categoryNames,
  currentPlayer,
  actualImposter,
  goToSetup,
  addPlayer,
  removePlayer,
  startGame,
  nextPlayerReveal,
  startVoting,
  castVote,
  resetGame
} = useImposterGame()
</script>
