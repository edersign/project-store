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
    </nuxt-link>
    <div class="product-info">
      <div class="product-collection">{{ product.category }}</div>
      <div class="product-price">$ {{ product.price }}</div>
      <nuxt-link :to="`/produtos/${product.id}`" class="product-title">
        <h3>{{ product.title }}</h3>
      </nuxt-link>
      <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cartStore'

const cartStore = useCartStore()

const { product } = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const addToCart = () => {
  cartStore.addItem({
    id: product.id,
    title: product.title,
    slug: product.id.toString(),
    price: product.price,
    image: product.image,
    quantity: 1
  })
}
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
  grid-template-rows: repeat(3, auto)
  gap: 0.5rem
  padding: 1rem
  justify-items: stretch
  align-items: end
  min-height: 190px
  align-content: space-between

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
  grid-area: 1 / 2 / 2 / 3

.product-title
  color: $black
  text-decoration: none
  grid-area: 2 / 1 / 3 / 3
  font-size: 1.125rem
  font-weight: 600
  display: grid
  justify-items: start
  align-items: start
.btn
  grid-area: 3 / 1 / 4 / 3
  padding: $spacing-sm $spacing-md
  border: none
  border-radius: 4px
  font-weight: 500
  cursor: pointer
  transition: all 0.2s ease
  text-align: center
  margin-top: $spacing-sm

  &-primary
    background-color: $primary-color
    color: $white

    &:hover
      opacity: 0.9
</style>
