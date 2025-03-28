<template>
  <!-- Features Section -->
  <section class="category-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ title }}</h2>
        <div class="view-controls">
          <nuxt-link to="/category/apparel" class="view-all">VIEW ALL</nuxt-link>
          <button class="nav-button prev">←</button>
          <button class="nav-button next">→</button>
        </div>
      </div>
      <div class="product-grid">
        <div v-for="p in products" :key="p.id" class="product-item">
          <ProductCard :product="p" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface Products {
  id?: number
  title?: string
  price?: number
  description?: string
  category?: string
  image?: string
  rating?: Rating
}

export interface Rating {
  rate?: number
  count?: number
}

const { category, title } = defineProps({
  title: {
    type: String,
    default: 'Features'
  },
  category: {
    type: String,
    default: 'category'
  },
  product: {
    type: Object as PropType<Products>,
    default: () => ({})
  }
})

const uri = 'https://fakestoreapi.com/products/category/' + category

//  fetch the products
const { data: products } = await useFetch<Products[]>(uri)

console.log(products)
</script>
<style lang="sass" scoped>
.category-section
  margin: $spacing-xxl 0

  .container
    height: 100%
    @include container

  .section-header
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: $spacing-lg

  .section-title
    @include h2(.8)


  .view-controls
    display: flex
    align-items: center
    gap: $spacing-sm

  .view-all
    font-size: 0.875rem
    font-weight: 600
    margin-right: $spacing-md
    text-decoration: none
    font-family: $font-primary
    text-decoration: none
    color: $black

  .nav-button
    font-size: 1.25rem
    font-weight: 600
    width: 2rem
    height: 2rem
    border: none
    background-color: transparent
    cursor: pointer
    @include flex()

  .product-grid
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
    gap: $spacing-md

  .product-item
    background-color: $gray-light
    border-radius: $border-radius-sm
    overflow: hidden
</style>
