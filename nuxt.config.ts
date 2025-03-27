export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@nuxt/scripts', '@pinia/nuxt'],
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `
            @use "~/assets/styles/_reset.sass" as *
            @use "~/assets/styles/_functions.sass" as *
            @use "~/assets/styles/_queries.sass" as *
            @use "~/assets/styles/_vars.sass" as *
            @use "~/assets/styles/_type.sass" as *
            @use "~/assets/styles/_colors.sass" as *
            @use "~/assets/styles/_common.sass" as *
          `
        }
      }
    }
  },

  app: {
    head: {
      title: 'Simple Store',
      htmlAttrs: {
        lang: 'pt-br'
      },
      meta: [{ name: 'description', content: 'Uma loja feita com Nutx 3' }]
    }
  },

  typescript: {
    typeCheck: true
  }
})
