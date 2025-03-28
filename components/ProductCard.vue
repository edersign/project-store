<template>
  <div class="card">
    <nuxt-link :to="`/produtos/${product.id}`" class="product-link">
      <div class="product-image-container">
        <NuxtImg
          :src="`${product.image}`"
          :alt="product.title"
          class="product-image"
          width="350"
          height="350"
          fill
        />
      </div>
      <div class="product-info">
        <div class="product-collection">{{ product.category }}</div>
        <div class="product-price">$ {{ product.price }}</div>
        <h3 class="product-title">{{ product.title }}</h3>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
const { product } = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style lang="sass" scoped>
.product-link
  display: block
  color: inherit
  text-decoration: none
  &:hover
    color: inherit

.product-image-container
  position: relative
  overflow: hidden
  width: 100%
  height: auto
  padding: $spacing-md
  margin: auto
  background: $white

  .product-image
    width: 100%
    object-fit: contain

.product-info
  display: grid
  grid-template-columns: repeat(2, 1fr)
  grid-template-rows: repeat(2, 1fr)
  gap: $spacing-sm
  padding: $spacing-md
  align-items: center
  justify-content: center

.product-collection
  font-size: 0.65rem
  color: $gray-medium
  font-weight: 600
  text-transform: uppercase
  grid-area: 1 / 1 / 2 / 2

.product-price
  font-size: 0.875rem
  font-weight: 600
  text-align: right
  grid-area:  1 / 2 / 2 / 3


.product-title
  grid-area: 2 / 1 / 3 / 3
  font-size: 1.125rem
  font-weight: 600

</style>
