import { defineNuxtPlugin } from '#imports'
import type { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin(({ $pinia }) => {
  // eslint-disable-next-line prettier/prettier
  ($pinia as ReturnType<typeof createPinia>).use(piniaPluginPersistedstate)
})
