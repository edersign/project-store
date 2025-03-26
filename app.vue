<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="sass" scoped>
*
  box-sizing: border-box

html,
body
  margin: 0

html
  background-color: var(--color-html-bg)
  color: var(--color-html)
  font-family: $fontFamily
  font-size: calc(($html-font-size) * 1px)
  line-height: calc(($html-line-height) * 1px)
  -webkit-font-smoothing: antialiased
  scroll-behavior: smooth
  font-variant-ligatures: none
</style>
