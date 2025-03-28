<template>
  <div class="content">
    <div class="header">Produtos</div>

    <LazyCategoriesFilters />

    <div class="products-grid">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Products } from '~/types'
const { data: products } = await useFetch<Products[]>('https://fakestoreapi.com/products')

useHead({
  title: 'Todos os produtos',
  meta: [{ name: 'description', content: 'Veja a lista completa de produtos!' }]
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

.sidebar
  width: 200px
  margin-right: 1rem
.products-grid
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 1rem
</style>
