<template>
  <div class="cart-page">
    <div class="container">
      <h1 class="cart-title">Your Cart</h1>

      <div v-if="cartItems.length > 0" class="cart-content">
        <div class="cart-items">
          <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
            <div class="item-image">
              <img :src="item.image" :alt="item.title" class="product-image">
            </div>
            <div class="item-details">
              <h3 class="item-title">{{ item.title }}</h3>
              <div class="item-options">
                <span v-if="item.size" class="item-option">Size: {{ item.size }}</span>
                <span v-if="item.color" class="item-option">Color: {{ item.color }}</span>
              </div>
              <div class="item-quantity">
                <button class="quantity-btn decrease" @click="decreaseQuantity(index)">-</button>
                <span class="quantity-value">{{ item.quantity }}</span>
                <button class="quantity-btn increase" @click="increaseQuantity(index)">+</button>
              </div>
            </div>
            <div class="item-price">${{ (item.price * item.quantity).toFixed(2) }}</div>
            <button class="remove-item-btn" @click="removeItem(index)">✕</button>
          </div>
        </div>

        <div class="cart-summary">
          <div class="summary-header">
            <h2 class="summary-title">Subtotal</h2>
          </div>
          <div class="summary-content">
            <div class="summary-row">
              <span class="summary-label">Subtotal</span>
              <span class="summary-value">${{ calculateSubtotal().toFixed(2) }}</span>
            </div>
            <div class="summary-row">
              <span class="summary-label">Shipping</span>
              <span class="summary-value">Calculated at checkout</span>
            </div>
            <div class="summary-row total">
              <span class="summary-label">Total</span>
              <span class="summary-value">${{ calculateSubtotal().toFixed(2) }}</span>
            </div>

            <div class="payment-methods">
              <img src="https://ext.same-assets.com/1131317820/2053826966.svg" alt="Payment Methods" class="payment-icon">
              <span>Pay with browser.</span>
            </div>

            <button class="btn checkout-btn">Continue to Checkout</button>
          </div>
        </div>
      </div>

      <div v-else class="empty-cart">
        <p class="empty-message">No items found.</p>
        <nuxt-link to="/" class="btn continue-shopping-btn">Continue Shopping</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Mock cart data
const cartItems = ref([
  {
    id: 1,
    title: 'Logo sweatshirt',
    slug: 'logo-sweatshirt',
    price: 50,
    image: 'https://ext.same-assets.com/2675109532/1198502453.webp',
    quantity: 1,
    size: 'M',
    color: 'Blue'
  },
  {
    id: 3,
    title: 'Container Baggu tote',
    slug: 'container-baggu-tote',
    price: 55,
    image: 'https://ext.same-assets.com/2675109532/1407443501.webp',
    quantity: 1,
    size: 'One Size',
    color: 'Black'
  }
])

// Cart functions
const increaseQuantity = (index: number) => {
  cartItems.value[index].quantity++
}

const decreaseQuantity = (index: number) => {
  if (cartItems.value[index].quantity > 1) {
    cartItems.value[index].quantity--
  }
}

const removeItem = (index: number) => {
  cartItems.value.splice(index, 1)
}

const calculateSubtotal = () => {
  return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
}
</script>

<style lang="sass" scoped>
.cart-page
  padding: $spacing-lg 0 $spacing-xxl

.cart-title
  font-size: 2.5rem
  font-weight: 700
  margin-bottom: $spacing-xl

// Cart with items
.cart-content
  display: grid
  grid-template-columns: 2fr 1fr
  gap: $spacing-xl

  @media (max-width: $breakpoint-md)
    grid-template-columns: 1fr

.cart-items
  display: flex
  flex-direction: column
  gap: $spacing-md


.cart-item
  display: grid
  grid-template-columns: 100px 1fr auto auto
  gap: $spacing-md
  align-items: center
  padding: $spacing-md
  background-color: $gray-light
  border-radius: $border-radius-sm

  .item-image
    width: 100px
    height: 100px
    overflow: hidden
    border-radius: $border-radius-sm

    .product-image
      width: 100%
      height: 100%
      object-fit: cover

  .item-details
    .item-title
      font-size: 1.125rem
      font-weight: 600
      margin-bottom: $spacing-xs

    .item-options
      display: flex
      gap: $spacing-md
      margin-bottom: $spacing-xs
      font-size: 0.875rem
      color: $gray-medium

    .item-quantity
      display: flex
      align-items: center
      gap: $spacing-sm

      .quantity-btn
        width: 24px
        height: 24px
        display: flex
        align-items: center
        justify-content: center
        background-color: $white
        border: 1px solid $gray-medium
        border-radius: 50%
        cursor: pointer
        font-size: 1rem

        &:hover
          background-color: $gray-light


      .quantity-value
        font-size: 0.875rem
        font-weight: 600


  .item-price
    font-size: 1rem
    font-weight: 600

  .remove-item-btn
    width: 24px
    height: 24px
    display: flex
    align-items: center
    justify-content: center
    background: none
    border: none
    cursor: pointer
    font-size: 0.875rem

    &:hover
      color: $primary-color


  @media (max-width: $breakpoint-md)
    grid-template-columns: 80px 1fr auto

    .item-image
      width: 80px
      height: 80px

    .item-price
      grid-column: 3
      grid-row: 1

    .remove-item-btn
      grid-column: 3
      grid-row: 2

.cart-summary
  background-color: $gray-light
  border-radius: $border-radius-sm
  padding: $spacing-lg
  align-self: flex-start

  .summary-header
    margin-bottom: $spacing-md

    .summary-title
      font-size: 1.5rem
      font-weight: 600
      margin-bottom: 0


  .summary-content
    display: flex
    flex-direction: column
    gap: $spacing-md

  .summary-row
    display: flex
    justify-content: space-between
    font-size: 0.875rem

    &.total
      margin-top: $spacing-md
      padding-top: $spacing-md
      border-top: 1px solid rgba($black, 0.1)
      font-size: 1rem
      font-weight: 600


  .payment-methods
    display: flex
    align-items: center
    gap: $spacing-xs
    font-size: 0.875rem
    color: $gray-medium
    margin-bottom: $spacing-md

    .payment-icon
      height: 1.25rem

  .checkout-btn
    width: 100%
    padding: $spacing-md
    background-color: $primary-color
    color: $white
    font-weight: 600
    text-transform: uppercase
    border: none
    border-radius: $border-radius-sm
    cursor: pointer
    transition: $transition-base

    &:hover
      background-color: darken($primary-color, 10%)


// Empty cart
.empty-cart
  text-align: center
  padding: $spacing-xxl 0

  .empty-message
    font-size: 1.25rem
    margin-bottom: $spacing-lg
    color: $gray-medium


  .continue-shopping-btn
    display: inline-block
    padding: $spacing-md $spacing-lg
    background-color: $primary-color
    color: $white
    font-weight: 600
    text-transform: uppercase
    border-radius: $border-radius-sm
    transition: $transition-base

    &:hover
      background-color: darken($primary-color, 10%)

</style>