<template>
  <div class="layout">
    <LazyLayoutHeaderComponent />
    <main>
      <slot />
    </main>
    <LazyLayoutFooterComponent />
  </div>
</template>

<style lang="sass" scoped>
.layout
  display: flex
  flex-direction: column
  min-height: 100vh
main
  flex: 1
</style>
