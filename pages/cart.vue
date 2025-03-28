<template>
  <div class="cart-page">
    <div class="container">
      <h1 class="cart-title">Carrinho</h1>

      <div v-if="cartItems.length > 0" class="cart-content">
        <div class="cart-items">
          <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
            <div class="item-image">
              <figure class="item-image-wrap">
                <NuxtPicture
                  loading="lazy"
                  :src="item.image"
                  :alt="item.title"
                  class="product-image"
                  width="80"
                  height="80"
                  lazy
                />
              </figure>
            </div>
            <div class="item-details">
              <h3 class="item-title">{{ item.title }}</h3>

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
              <span class="summary-label">Frete</span>
              <span class="summary-value">Calculado no checkout</span>
            </div>
            <div class="summary-row total">
              <span class="summary-label">Total</span>
              <span class="summary-value">${{ calculateSubtotal().toFixed(2) }}</span>
            </div>

            <button class="btn checkout-btn">Finalizar compra</button>
          </div>
        </div>
      </div>

      <div v-else class="empty-cart">
        <p class="empty-message">Carrinho vazio.</p>
        <nuxt-link to="/" class="btn continue-shopping-btn">Continue comprando</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cartStore'
interface CartItem {
  id: number
  title: string
  slug: string
  price: number
  image: string
  quantity: number
}

// Initialize with empty values for SSR
const cartItems = ref<CartItem[]>([])
const cartStore = ref(null)

// Only access the store on the client side
onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cartStore.value = useCartStore() as any
  // Update cartItems when the component is mounted
  if (cartStore.value) {
    cartItems.value = (cartStore.value as { items: CartItem[] }).items
  }
})

// Cart functions that check if cartStore exists
const increaseQuantity = (index: number) => {
  if (cartStore.value) {
    ;(
      cartStore.value as { updateQuantity: (index: number, quantity: number) => void }
    ).updateQuantity(index, (cartStore.value as { items: CartItem[] }).items[index].quantity + 1)
    cartItems.value = [...(cartStore.value as { items: CartItem[] }).items]
  }
}

const decreaseQuantity = (index: number) => {
  if (cartStore.value && (cartStore.value as { items: CartItem[] }).items[index].quantity > 1) {
    ;(
      cartStore.value as { updateQuantity: (index: number, quantity: number) => void }
    ).updateQuantity(index, (cartStore.value as { items: CartItem[] }).items[index].quantity - 1)
    cartItems.value = [...(cartStore.value as { items: CartItem[] }).items]
  }
}

const removeItem = (index: number) => {
  if (cartStore.value) {
    ;(cartStore.value as { removeItem: (index: number) => void }).removeItem(index)
    cartItems.value = [...(cartStore.value as { items: CartItem[] }).items]
  }
}

const calculateSubtotal = () => {
  return cartStore.value ? (cartStore.value as { subtotal: number }).subtotal : 0
}
</script>

<style lang="sass" scoped>
.cart-page
  padding: $spacing-lg 0 $spacing-xxl

.container
  @include container

.cart-title
  @include h1(1.4)

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
  background-color: #ddd
  border-radius: $border-radius-sm

  .item-image
    width: 100px
    height: 100px
    overflow: hidden
    border-radius: $border-radius-sm
    background-color: $white
    margin: auto
    padding: $spacing-sm
    display: flex
    align-items: center
    justify-content: center
    figure
      width: 100%
      height: 100%
      overflow: hidden
      border-radius: $border-radius-sm

    .product-image
      margin: auto
      width: 100%
      height: 100%
      object-fit: cover

  .item-details
    .item-title
      @include h2(.6)

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
      border-top: 1px solid rgba($black, 0.4)
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
      background-color: $primary-color
      opacity: 0.9

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
      background-color: $primary-color
      opacity: 0.9
</style>
