
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  GameConfetti: typeof import("../../components/game/GameConfetti.vue")['default']
  GameCountdown: typeof import("../../components/game/GameCountdown.vue")['default']
  GameHandoff: typeof import("../../components/game/GameHandoff.vue")['default']
  GameLobbyLink: typeof import("../../components/game/GameLobbyLink.vue")['default']
  GameNav: typeof import("../../components/game/GameNav.vue")['default']
  GamePauseOverlay: typeof import("../../components/game/GamePauseOverlay.vue")['default']
  GameRuleList: typeof import("../../components/game/GameRuleList.vue")['default']
  GameScoreboard: typeof import("../../components/game/GameScoreboard.vue")['default']
  GameShell: typeof import("../../components/game/GameShell.vue")['default']
  GameSoundButton: typeof import("../../components/game/GameSoundButton.vue")['default']
  GameWelcome: typeof import("../../components/game/GameWelcome.vue")['default']
  PlayerListEditor: typeof import("../../components/game/PlayerListEditor.vue")['default']
  DatTinCountdown: typeof import("../../components/games/dat-tin/DatTinCountdown.vue")['default']
  DatTinGameOver: typeof import("../../components/games/dat-tin/DatTinGameOver.vue")['default']
  DatTinPlaying: typeof import("../../components/games/dat-tin/DatTinPlaying.vue")['default']
  DatTinReview: typeof import("../../components/games/dat-tin/DatTinReview.vue")['default']
  DatTinRoundOver: typeof import("../../components/games/dat-tin/DatTinRoundOver.vue")['default']
  DatTinSetup: typeof import("../../components/games/dat-tin/DatTinSetup.vue")['default']
  ImposterDiscussion: typeof import("../../components/games/imposter/ImposterDiscussion.vue")['default']
  ImposterHeader: typeof import("../../components/games/imposter/ImposterHeader.vue")['default']
  ImposterPassReveal: typeof import("../../components/games/imposter/ImposterPassReveal.vue")['default']
  ImposterResolution: typeof import("../../components/games/imposter/ImposterResolution.vue")['default']
  ImposterSetup: typeof import("../../components/games/imposter/ImposterSetup.vue")['default']
  ImposterVoting: typeof import("../../components/games/imposter/ImposterVoting.vue")['default']
  ImposterWelcome: typeof import("../../components/games/imposter/ImposterWelcome.vue")['default']
  LobbyGameList: typeof import("../../components/lobby/LobbyGameList.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  VitePwaManifest: typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
  NuxtPwaManifest: typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
  NuxtPwaAssets: typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']
  PwaAppleImage: typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaAppleImage")['default']
  PwaAppleSplashScreenImage: typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaAppleSplashScreenImage")['default']
  PwaFaviconImage: typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaFaviconImage")['default']
  PwaMaskableImage: typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaMaskableImage")['default']
  PwaTransparentImage: typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaTransparentImage")['default']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyGameConfetti: LazyComponent<typeof import("../../components/game/GameConfetti.vue")['default']>
  LazyGameCountdown: LazyComponent<typeof import("../../components/game/GameCountdown.vue")['default']>
  LazyGameHandoff: LazyComponent<typeof import("../../components/game/GameHandoff.vue")['default']>
  LazyGameLobbyLink: LazyComponent<typeof import("../../components/game/GameLobbyLink.vue")['default']>
  LazyGameNav: LazyComponent<typeof import("../../components/game/GameNav.vue")['default']>
  LazyGamePauseOverlay: LazyComponent<typeof import("../../components/game/GamePauseOverlay.vue")['default']>
  LazyGameRuleList: LazyComponent<typeof import("../../components/game/GameRuleList.vue")['default']>
  LazyGameScoreboard: LazyComponent<typeof import("../../components/game/GameScoreboard.vue")['default']>
  LazyGameShell: LazyComponent<typeof import("../../components/game/GameShell.vue")['default']>
  LazyGameSoundButton: LazyComponent<typeof import("../../components/game/GameSoundButton.vue")['default']>
  LazyGameWelcome: LazyComponent<typeof import("../../components/game/GameWelcome.vue")['default']>
  LazyPlayerListEditor: LazyComponent<typeof import("../../components/game/PlayerListEditor.vue")['default']>
  LazyDatTinCountdown: LazyComponent<typeof import("../../components/games/dat-tin/DatTinCountdown.vue")['default']>
  LazyDatTinGameOver: LazyComponent<typeof import("../../components/games/dat-tin/DatTinGameOver.vue")['default']>
  LazyDatTinPlaying: LazyComponent<typeof import("../../components/games/dat-tin/DatTinPlaying.vue")['default']>
  LazyDatTinReview: LazyComponent<typeof import("../../components/games/dat-tin/DatTinReview.vue")['default']>
  LazyDatTinRoundOver: LazyComponent<typeof import("../../components/games/dat-tin/DatTinRoundOver.vue")['default']>
  LazyDatTinSetup: LazyComponent<typeof import("../../components/games/dat-tin/DatTinSetup.vue")['default']>
  LazyImposterDiscussion: LazyComponent<typeof import("../../components/games/imposter/ImposterDiscussion.vue")['default']>
  LazyImposterHeader: LazyComponent<typeof import("../../components/games/imposter/ImposterHeader.vue")['default']>
  LazyImposterPassReveal: LazyComponent<typeof import("../../components/games/imposter/ImposterPassReveal.vue")['default']>
  LazyImposterResolution: LazyComponent<typeof import("../../components/games/imposter/ImposterResolution.vue")['default']>
  LazyImposterSetup: LazyComponent<typeof import("../../components/games/imposter/ImposterSetup.vue")['default']>
  LazyImposterVoting: LazyComponent<typeof import("../../components/games/imposter/ImposterVoting.vue")['default']>
  LazyImposterWelcome: LazyComponent<typeof import("../../components/games/imposter/ImposterWelcome.vue")['default']>
  LazyLobbyGameList: LazyComponent<typeof import("../../components/lobby/LobbyGameList.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyVitePwaManifest: LazyComponent<typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']>
  LazyNuxtPwaManifest: LazyComponent<typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']>
  LazyNuxtPwaAssets: LazyComponent<typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']>
  LazyPwaAppleImage: LazyComponent<typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaAppleImage")['default']>
  LazyPwaAppleSplashScreenImage: LazyComponent<typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaAppleSplashScreenImage")['default']>
  LazyPwaFaviconImage: LazyComponent<typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaFaviconImage")['default']>
  LazyPwaMaskableImage: LazyComponent<typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaMaskableImage")['default']>
  LazyPwaTransparentImage: LazyComponent<typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaTransparentImage")['default']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
