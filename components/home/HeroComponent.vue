<template>
  <section class="hero-section">
    <div class="hero-grid">
      <div class="hero-wrap">
        <div class="hero-content">
          <h1 class="hero-title">CLASSICS</h1>
          <div class="product-card">
            <div class="product-category">men's clothing</div>
            <div class="product-price">$50</div>
            <h3 class="product-title">Sweatshirt</h3>
          </div>
        </div>
        <figure class="hero-image">
          <NuxtPicture
            loading="lazy"
            class="image"
            placeholder
            width="1920"
            height="1272"
            src="/images/cullen-jones-Ati9W2qe8gg-unsplash.jpg"
          />
        </figure>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.hero-section
  margin-bottom: $spacing-xl
  height: calc( 100vh - $header-height)
  overflow: hidden

  .hero-grid
    @include flex()
    width: 100%

  .hero-wrap
    position: relative
    overflow: hidden
    color: $white
    background-color: $primary-color
    width: 100%

  .hero-content
    position: absolute
    z-index: 2
    padding: $spacing-lg

  .hero-title
    text-transform: uppercase
    @include h1(4, 700)

  .hero-image
    width: 100%
    height: 100%
    opacity: 0.8
    position: relative

    .image
      width: 100%
      height: 100%
      display: block
      object-fit: cover

.product-card
  background-color: rgba($black, 0.75)
  padding: $spacing-md $spacing-lg
  max-width: 12rem


.product-category
  font-size: 0.75rem
  font-weight: 600
  margin-bottom: $spacing-xs
  text-transform: uppercase


.product-price
  font-size: 1rem
  font-weight: 600
  margin-bottom: $spacing-xs


.product-title
  font-size: 1.125rem
  font-weight: 400
  margin-bottom: 0
</style>
