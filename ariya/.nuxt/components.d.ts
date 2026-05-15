
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


export const GameConfetti: typeof import("../components/game/GameConfetti.vue")['default']
export const GameCountdown: typeof import("../components/game/GameCountdown.vue")['default']
export const GameHandoff: typeof import("../components/game/GameHandoff.vue")['default']
export const GameLobbyLink: typeof import("../components/game/GameLobbyLink.vue")['default']
export const GameNav: typeof import("../components/game/GameNav.vue")['default']
export const GamePauseOverlay: typeof import("../components/game/GamePauseOverlay.vue")['default']
export const GameRuleList: typeof import("../components/game/GameRuleList.vue")['default']
export const GameScoreboard: typeof import("../components/game/GameScoreboard.vue")['default']
export const GameShell: typeof import("../components/game/GameShell.vue")['default']
export const GameSoundButton: typeof import("../components/game/GameSoundButton.vue")['default']
export const GameWelcome: typeof import("../components/game/GameWelcome.vue")['default']
export const PlayerListEditor: typeof import("../components/game/PlayerListEditor.vue")['default']
export const DatTinCountdown: typeof import("../components/games/dat-tin/DatTinCountdown.vue")['default']
export const DatTinGameOver: typeof import("../components/games/dat-tin/DatTinGameOver.vue")['default']
export const DatTinPlaying: typeof import("../components/games/dat-tin/DatTinPlaying.vue")['default']
export const DatTinReview: typeof import("../components/games/dat-tin/DatTinReview.vue")['default']
export const DatTinRoundOver: typeof import("../components/games/dat-tin/DatTinRoundOver.vue")['default']
export const DatTinSetup: typeof import("../components/games/dat-tin/DatTinSetup.vue")['default']
export const ImposterDiscussion: typeof import("../components/games/imposter/ImposterDiscussion.vue")['default']
export const ImposterHeader: typeof import("../components/games/imposter/ImposterHeader.vue")['default']
export const ImposterPassReveal: typeof import("../components/games/imposter/ImposterPassReveal.vue")['default']
export const ImposterResolution: typeof import("../components/games/imposter/ImposterResolution.vue")['default']
export const ImposterSetup: typeof import("../components/games/imposter/ImposterSetup.vue")['default']
export const ImposterVoting: typeof import("../components/games/imposter/ImposterVoting.vue")['default']
export const ImposterWelcome: typeof import("../components/games/imposter/ImposterWelcome.vue")['default']
export const LobbyGameList: typeof import("../components/lobby/LobbyGameList.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const VitePwaManifest: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
export const NuxtPwaManifest: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']
export const NuxtPwaAssets: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']
export const PwaAppleImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaAppleImage")['default']
export const PwaAppleSplashScreenImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaAppleSplashScreenImage")['default']
export const PwaFaviconImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaFaviconImage")['default']
export const PwaMaskableImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaMaskableImage")['default']
export const PwaTransparentImage: typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaTransparentImage")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyGameConfetti: LazyComponent<typeof import("../components/game/GameConfetti.vue")['default']>
export const LazyGameCountdown: LazyComponent<typeof import("../components/game/GameCountdown.vue")['default']>
export const LazyGameHandoff: LazyComponent<typeof import("../components/game/GameHandoff.vue")['default']>
export const LazyGameLobbyLink: LazyComponent<typeof import("../components/game/GameLobbyLink.vue")['default']>
export const LazyGameNav: LazyComponent<typeof import("../components/game/GameNav.vue")['default']>
export const LazyGamePauseOverlay: LazyComponent<typeof import("../components/game/GamePauseOverlay.vue")['default']>
export const LazyGameRuleList: LazyComponent<typeof import("../components/game/GameRuleList.vue")['default']>
export const LazyGameScoreboard: LazyComponent<typeof import("../components/game/GameScoreboard.vue")['default']>
export const LazyGameShell: LazyComponent<typeof import("../components/game/GameShell.vue")['default']>
export const LazyGameSoundButton: LazyComponent<typeof import("../components/game/GameSoundButton.vue")['default']>
export const LazyGameWelcome: LazyComponent<typeof import("../components/game/GameWelcome.vue")['default']>
export const LazyPlayerListEditor: LazyComponent<typeof import("../components/game/PlayerListEditor.vue")['default']>
export const LazyDatTinCountdown: LazyComponent<typeof import("../components/games/dat-tin/DatTinCountdown.vue")['default']>
export const LazyDatTinGameOver: LazyComponent<typeof import("../components/games/dat-tin/DatTinGameOver.vue")['default']>
export const LazyDatTinPlaying: LazyComponent<typeof import("../components/games/dat-tin/DatTinPlaying.vue")['default']>
export const LazyDatTinReview: LazyComponent<typeof import("../components/games/dat-tin/DatTinReview.vue")['default']>
export const LazyDatTinRoundOver: LazyComponent<typeof import("../components/games/dat-tin/DatTinRoundOver.vue")['default']>
export const LazyDatTinSetup: LazyComponent<typeof import("../components/games/dat-tin/DatTinSetup.vue")['default']>
export const LazyImposterDiscussion: LazyComponent<typeof import("../components/games/imposter/ImposterDiscussion.vue")['default']>
export const LazyImposterHeader: LazyComponent<typeof import("../components/games/imposter/ImposterHeader.vue")['default']>
export const LazyImposterPassReveal: LazyComponent<typeof import("../components/games/imposter/ImposterPassReveal.vue")['default']>
export const LazyImposterResolution: LazyComponent<typeof import("../components/games/imposter/ImposterResolution.vue")['default']>
export const LazyImposterSetup: LazyComponent<typeof import("../components/games/imposter/ImposterSetup.vue")['default']>
export const LazyImposterVoting: LazyComponent<typeof import("../components/games/imposter/ImposterVoting.vue")['default']>
export const LazyImposterWelcome: LazyComponent<typeof import("../components/games/imposter/ImposterWelcome.vue")['default']>
export const LazyLobbyGameList: LazyComponent<typeof import("../components/lobby/LobbyGameList.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyVitePwaManifest: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']>
export const LazyNuxtPwaManifest: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest")['default']>
export const LazyNuxtPwaAssets: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets")['default']>
export const LazyPwaAppleImage: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaAppleImage")['default']>
export const LazyPwaAppleSplashScreenImage: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaAppleSplashScreenImage")['default']>
export const LazyPwaFaviconImage: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaFaviconImage")['default']>
export const LazyPwaMaskableImage: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaMaskableImage")['default']>
export const LazyPwaTransparentImage: LazyComponent<typeof import("../node_modules/@vite-pwa/nuxt/dist/runtime/components/nuxt4/PwaTransparentImage")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
