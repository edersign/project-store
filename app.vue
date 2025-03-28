<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="sass">
// Custom font
@font-face
  font-family: 'WF Visual Sans'
  src: url('/fonts/WFVisualSans-Regular.woff2') format('woff2')
  font-weight: 400
  font-style: normal
  font-display: swap


@font-face
  font-family: 'WF Visual Sans'
  src: url('/fonts/WFVisualSans-Medium.woff2') format('woff2')
  font-weight: 500
  font-style: normal
  font-display: swap


@font-face
  font-family: 'WF Visual Sans'
  src: url('/fonts/WFVisualSans-SemiBold.woff2') format('woff2')
  font-weight: 600
  font-style: normal
  font-display: swap


@font-face
  font-family: 'WF Visual Sans'
  src: url('/fonts/WFVisualSans-RegularText.woff2') format('woff2')
  font-weight: 400
  font-style: normal
  font-display: swap


@font-face
  font-family: 'WF Visual Sans'
  src: url('/fonts/WFVisualSans-SemiBoldText.woff2') format('woff2')
  font-weight: 600
  font-style: normal
  font-display: swap

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
