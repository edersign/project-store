<template>
  <div class="card">
    <div>
      <div>
        <img :src="`${product.image}`" >
      </div>
      <div>
        <h2>{{ product.title }}</h2>
        <p>Price - ${{ product.price }}</p>
        <h3>Product description:</h3>
        <p>{{ product.description }}</p>
        <button>
          <i class="material-icons">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
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
img {
  max-width: 400px;
}
</style>
