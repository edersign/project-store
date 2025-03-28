<template>
  <div class="content">
    <div class="header">{{ title }}</div>

    <ClientOnly>
      <LazyCategoriesFilters />
    </ClientOnly>

    <div class="products-grid">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Products } from '~/types'

const route = useRoute()
const categorySlug = route.params.slug
const uri = 'https://fakestoreapi.com/products/category/' + categorySlug

const { data: products } = await useFetch<Products[]>(uri, {
  transform: (response): Products[] => response as Products[]
})

if (!products.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

const formatCategory = (category: string): string => {
  return category
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const title = ref(formatCategory(categorySlug.toString()))

useHead({
  title: title.value
})
</script>
<style lang="sass" scoped>
.content
  @include container
  display: flex
  flex-direction: column
.header
  font-size: base(1.25)
  margin: base(1.25) 0
  font-weight: bold

.products-grid
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 1rem
</style>
