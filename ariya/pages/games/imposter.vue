<template>
  <main class="game-page imposter-theme">
    <div class="container">
      <nav class="nav-row" aria-label="Game navigation">
        <NuxtLink class="brand-mark" to="/">
          <span class="brand-icon">A</span>
          <span>Ariya</span>
        </NuxtLink>
        <NuxtLink class="back-link" to="/">Back to lobby</NuxtLink>
      </nav>

      <section class="game-stage">
        <p class="eyebrow">Imposter</p>
        <h1 class="game-title">Who dey disguise?</h1>
        <p class="game-description">
          The hidden role game lives here. This route is ready for player setup, secret role reveal,
          discussion, voting, and resolution from the existing React prototype.
        </p>
        <div class="action-row">
          <button class="btn" type="button">Add players</button>
          <NuxtLink class="btn secondary" to="/">Choose another game</NuxtLink>
        </div>
      </section>
    </div>
  </main>
</template>

