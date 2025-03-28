<template>
  <div>
    <ProductDetails v-if="product" :product="product" />
  </div>
</template>

<script setup lang="ts">
import type { Products } from '~/types'

const route = useRoute()
const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
const uri = 'https://fakestoreapi.com/products/' + id

// Fix the typing issue with useFetch
const { data: product } =
  (await useFetch<Products>(uri, {
    key: id.toString(),
    transform: (response): Products => response as Products
  })) || []

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

const title = ref(product.value?.title)
const description = ref(product.value?.description)

useHead({
  title: title.value,
  meta: [{ name: 'description', content: description.value }]
})
</script>
