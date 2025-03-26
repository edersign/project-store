<template>
  <div>
    <div>
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
//  fetch the products
const { data: products } = await useFetch('https://fakestoreapi.com/products')

// definePageMeta({
//   layout: 'products'
// })

useHead({
  title: 'Simple Store | Todos os produtos',
  meta: [{ name: 'description', content: 'Veja a lista completa de produtos!' }]
})
</script>
