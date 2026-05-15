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

        <LobbyGameList />
      </section>
    </div>
  </main>
</template>
