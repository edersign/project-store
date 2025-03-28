<template>
  <div class="category-selector">
    <div class="container">
      <div class="categories-title">Categorias:</div>
      <div class="category-list">
        <nuxt-link
          v-for="category in categories"
          :key="category"
          :to="`/category/${category}`"
          class="category"
        >
          {{ formatCategory(category) }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = ref<string[]>([])

const response = await fetch('https://fakestoreapi.com/products/categories')
categories.value = await response.json()

const formatCategory = (category: string): string => {
  return category
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
</script>

<style lang="sass" scoped>

.container
  width: 100%
  display: flex
  margin: 10px 0 30px
  padding: 0
  align-items: center

.category-list
  display: flex
  flex-wrap: wrap
  gap: 0.5rem
  padding: 0 10px

.category
  padding: 0.5rem 1rem
  border-radius: 4px
  background-color: $primary-color
  color: $secondary-color
  text-decoration: none
  &.router-link-active
    background-color: $secondary-color
    color: $white
</style>
