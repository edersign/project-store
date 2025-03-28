<template>
  <section class="promo-section">
    <div class="promo-content">
      <h2 class="promo-title">BUILD<br />IN STYLE</h2>
      <div class="product-card promo-card">
        <div class="product-category">CLASSICS</div>
        <div class="product-price">$35</div>
        <h3 class="product-title">Loading tee</h3>
      </div>
    </div>
    <figure class="promo-image-wrap">
      <NuxtPicture
        loading="lazy"
        src="/images/andrew-neel-HqtYwlY9dxs-unsplash.jpg"
        alt="Loading tee"
        class="promo-image"
        width="500"
        height="500"
        lazy
      />
    </figure>
  </section>
</template>
<style lang="sass" scoped>
// Promo Section
.promo-section
  position: relative
  height: 400px
  background-color: $primary-color
  color: $white
  margin: $spacing-xxl 0
  overflow: hidden
  display: flex
  align-items: center

  .promo-content
    position: relative
    z-index: 2
    padding: $spacing-xl
    max-width: 50%

  .promo-title
    font-size: 4rem
    font-weight: 700
    line-height: 1
    margin-bottom: $spacing-lg
    text-transform: uppercase

  .promo-card
    background-color: rgba($black, 0.75)
    max-width: 200px
  .promo-image-wrap
    position: relative
    flex: 1
    height: 100%
    .promo-image
      position: absolute
      right: 0
      top: 0
      height: 100%
      width: auto
      object-fit: cover
      opacity: 0.8
</style>
