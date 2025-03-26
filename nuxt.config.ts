export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@nuxt/scripts', '@pinia/nuxt'],
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData:
            '@use "~/assets/styles/_colors.sass" as *\n@use "~/assets/styles/_vars.sass" as *\n@use "~/assets/styles/_type.sass" as *\n@use "~/assets/styles/_functions.sass" as *\n'
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
