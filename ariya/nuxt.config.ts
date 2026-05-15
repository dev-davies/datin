export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  modules: ['@vite-pwa/nuxt'],
  css: ['~/assets/css/main.css', '~/assets/css/dat-tin.css'],
  app: {
    head: {
      title: 'Ariya',
      meta: [
        { name: 'description', content: 'Ariya is a collection of party games built for friends, gist, and good vibes.' },
        { name: 'theme-color', content: '#07070f' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' }]
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Ariya',
      short_name: 'Ariya',
      description: 'A dark themed lobby for party games.',
      theme_color: '#07070f',
      background_color: '#07070f',
      display: 'standalone',
      start_url: '/',
      icons: [
        { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }
      ]
    },
    workbox: {
      navigateFallback: '/'
    }
  }
})
