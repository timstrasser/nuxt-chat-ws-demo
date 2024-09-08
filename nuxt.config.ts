export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  nitro: {
    experimental: {
      websocket: true,
      tasks: true,
      database: true,
    },
  },

  $production: {
    nitro: {
      database: {
        default: {
          connector: 'sqlite',
        },
      },
    },
  },

  compatibilityDate: '2024-09-08',
});
