<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="sass">
html,
body
  margin: 0
  padding: 0

html
  background-color: $color-bg
  color: $text-color
  font-family: $fontFamily
  font-size: calc(($html-font-size) * 1px)
  line-height: calc(($html-line-height) * 1px)
  -webkit-font-smoothing: antialiased
  scroll-behavior: smooth
  font-variant-ligatures: none
</style>
