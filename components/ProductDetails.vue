<template>
  <div class="product-page">
    <div class="container">
      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <ul class="breadcrumbs-list">
          <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="breadcrumb-item">
            <nuxt-link :to="`/category/${product?.category?.toLowerCase() ?? ''}`">{{
              product.category
            }}</nuxt-link>
          </li>
          <li class="breadcrumb-item">{{ product.title }}</li>
        </ul>
      </div>

      <!-- Product Content -->
      <div class="product-content">
        <div class="product-image-container">
          <figure class="product-image-wrapper">
            <NuxtPicture
              loading="lazy"
              placeholder
              :src="product.image"
              :alt="product.title"
              class="product-image"
            />
          </figure>
        </div>

        <div class="product-details">
          <h1 class="product-title">{{ product.title }}</h1>
          <p class="product-description">{{ product.description }}</p>

          <div class="product-price">${{ product.price }}</div>

          <!-- Product Options -->
          <div class="product-options">
            <div class="option-group">
              <div class="option-label">Quantity</div>
              <div class="quantity-selector">
                <input v-model="quantity" type="number" min="1" class="quantity-input" >
              </div>
            </div>
          </div>

          <!-- Product Metadata -->
          <div class="product-metadata">
            <div class="metadata-item">
              <div class="metadata-label">Collection</div>
              <div class="metadata-value">{{ product.category }}</div>
            </div>
          </div>

          <!-- Add to Cart Buttons -->
          <div class="product-actions">
            <button class="btn btn-actions buy-now-btn" disabled>Buy now</button>
            <button class="btn btn-actions add-to-cart-btn" @click="addToCart">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
    <!-- You may also like section -->
    <div class="related-products">
      <LazyHomeFeaturesComponent title="You may also like" :category="randomCategory" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Products } from '~/types'
import { useCartStore } from '~/stores/cartStore'

const { product } = defineProps({
  product: {
    type: Object as PropType<Products>,
    required: true
  }
})

const quantity = ref(1)
const cartStore = useCartStore()

const addToCart = () => {
  cartStore.addItem({
    id: product.id!,
    title: product.title!,
    slug: product.id!.toString(),
    price: product.price!,
    image: product.image!,
    quantity: quantity.value
  })
}
const categories = ['jewelery', 'electronics', "men's clothing", "women's clothing"]
const randomCategory = computed(() => {
  // Get a random category that's different from the current product's category
  const availableCategories = categories.filter((cat) => cat !== product.category?.toLowerCase())
  const randomIndex = Math.floor(Math.random() * availableCategories.length)
  return availableCategories[randomIndex]
})
</script>

<style lang="sass" scoped>
.product-page
  padding: $spacing-lg 0 $spacing-xxl

.container
  @include container


.breadcrumbs
  margin-bottom: $spacing-md

  .breadcrumbs-list
    display: flex
    gap: $spacing-xs
    font-size: 0.875rem

  .breadcrumb-item
    a
      color: $black
      text-decoration: none
      &:hover
        color: $gray-medium
        text-decoration: underline
    &:not(:last-child)::after
      content: '→'
      margin-left: $spacing-xs

.product-content
  display: grid
  grid-template-columns: 1fr 1fr
  gap: $spacing-xl
  margin-bottom: $spacing-xxl

  @media (max-width: $breakpoint-md)
    grid-template-columns: 1fr

  .product-image-container
    background-color: $gray-light
    width: 100%
    height: 100%
    display: flex
    align-items: center
    justify-content: center

  .product-image-wrapper
    width: 100%
    height: 100%

  .product-image
    max-width: 100%
    max-height: 500px
    object-fit: contain

.product-details
  .product-title
    @include h1(1.2)

  .product-description
    margin-bottom: $spacing-md
    color: $gray-medium
    font-family: $fontFamily

  .product-price
    font-size: 2rem
    font-weight: 600
    margin-bottom: $spacing-lg

.product-options
  margin-bottom: $spacing-lg

.option-group
  margin-bottom: $spacing-md

  .option-label
    font-size: 0.875rem
    font-weight: 600
    text-transform: uppercase
    margin-bottom: $spacing-xs

  .option-values
    display: flex
    flex-wrap: wrap
    gap: $spacing-xs

  .option-value
    padding: $spacing-sm $spacing-md
    border: 1px solid $gray-medium
    font-size: 0.875rem
    background-color: $white
    cursor: pointer
    transition: $transition-base

    &:hover
      border-color: $black

    &.selected
      border-color: $black
      background-color: $black
      color: $white

  .quantity-input
    width: 60px
    padding: $spacing-sm
    border: 1px solid $gray-medium
    text-align: center
    font-size: 0.875rem

.product-metadata
  margin-bottom: $spacing-lg
  border-top: 1px solid $gray-light
  border-bottom: 1px solid $gray-light
  padding: $spacing-md 0

.metadata-item
  display: flex
  justify-content: space-between
  padding: $spacing-xs 0

  .metadata-label
    font-size: 0.875rem
    color: $gray-medium

  .metadata-value
    font-size: 0.875rem
    font-weight: 600
    text-transform: uppercase

  .view-btn
    background: none
    border: none
    padding: 0
    font-size: 0.875rem
    font-weight: 600
    text-transform: uppercase
    cursor: pointer
    text-decoration: underline

    &:hover
      color: $primary-color

.product-actions
  display: grid
  grid-template-columns: 1fr 1fr
  gap: $spacing-md
  margin-bottom: $spacing-lg

  .btn-actions
    padding: $spacing-md
    font-size: base(.65)
    font-weight: 600
    border: none
    cursor: pointer

  .buy-now-btn
    background-color: $black
    color: $white

    &:disabled
      cursor: not-allowed
      opacity: 50%

    &:hover
      background-color: $black
      opacity: 15%

  .add-to-cart-btn
    background-color: $primary-color
    color: $white

    &:hover
      background-color: $primary-color
      opacity: 10%
</style>
