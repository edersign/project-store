<template>
  <div class="card">
    <img :src="`${product.image}`" class="thumb" >
    <p>{{ product.title }}</p>
    <NuxtLink :to="`/produtos/${product.id}`">
      <p>View Details</p>
    </NuxtLink>
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

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
