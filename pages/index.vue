<template>
  <div class="home-page">
    <!-- Hero Section -->
    <LazyHomeHeroComponent />

    <!-- Apparel Section -->
    <LazyHomeFeaturesComponent title="Men's Clothing" category="men's clothing" />

    <!-- Build In Style Section -->
    <LazyHomePromoComponent />

    <!-- Apparel Section -->
    <LazyHomeFeaturesComponent title="Jewelery" category="jewelery" />
  </div>
</template>

<style lang="sass" scoped>
// On The Go Section
.on-the-go-section
  height: 400px
  background-color: $black
  color: $white
  display: flex
  align-items: center
  justify-content: flex-end
  margin: $spacing-xxl 0

  .on-the-go-title
    font-size: 4rem
    font-weight: 700
    line-height: 1
    text-align: right
    margin-bottom: 0
    text-transform: uppercase
</style>
