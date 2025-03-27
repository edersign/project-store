<template>
  <!-- Cart Drawer -->
  <div v-if="isCartOpen" class="cart-drawer-overlay" @click="closeCartDrawer" />
  <div class="cart-drawer" :class="{ 'is-open': isCartOpen }">
    <div class="cart-drawer__header">
      <h2 class="cart-drawer__title">Your Cart ({{ cartItems.length }})</h2>
      <button class="cart-drawer__close" aria-label="Close cart" @click="closeCartDrawer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>

    <div class="cart-drawer__content">
      <div v-if="cartItems.length === 0" class="cart-drawer__empty">
        <p>Your cart is empty</p>
        <button class="cart-drawer__continue" @click="closeCartDrawer">Continue comprando</button>
      </div>

      <ul v-else class="cart-drawer__items">
        <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
          <div class="cart-item__image">
            <img :src="item.image" :alt="item.name" >
          </div>
          <div class="cart-item__details">
            <h3 class="cart-item__name">{{ item.name }}</h3>
            <p class="cart-item__price">${{ item.price.toFixed(2) }}</p>
            <div class="cart-item__quantity">
              <button
                class="quantity-btn"
                :disabled="item.quantity <= 1"
                @click="updateQuantity(index, -1)"
              >
                -
              </button>
              <span>{{ item.quantity }}</span>
              <button class="quantity-btn" @click="updateQuantity(index, 1)">+</button>
            </div>
          </div>
          <button class="cart-item__remove" aria-label="Remove item" @click="removeItem(index)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path
                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
              />
            </svg>
          </button>
        </li>
      </ul>

      <div v-if="cartItems.length > 0" class="cart-drawer__footer">
        <div class="cart-drawer__subtotal">
          <span>Subtotal:</span>
          <span>${{ calculateSubtotal().toFixed(2) }}</span>
        </div>
        <button class="cart-drawer__checkout">Proceed to Checkout</button>
        <NuxtLink to="/cart" class="cart-drawer__view-cart" @click="closeCartDrawer"
          >View Cart</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

interface CartItem {
  name: string
  price: number
  quantity: number
  image: string
}

const props = defineProps<{
  isOpen: boolean
  items: CartItem[]
}>()

const emit = defineEmits(['close', 'update-quantity', 'remove-item'])

const isCartOpen = computed(() => props.isOpen)
const cartItems = computed(() => props.items)

const closeCartDrawer = (): void => {
  emit('close')
}

const updateQuantity = (index: number, change: number): void => {
  emit('update-quantity', { index, change })
}

const removeItem = (index: number): void => {
  emit('remove-item', index)
}

const calculateSubtotal = (): number => {
  return cartItems.value.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
}
</script>

<style lang="sass" scoped>
// Cart Drawer Styles
.cart-drawer-overlay
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.5)
  z-index: 200

.cart-drawer
  position: fixed
  top: 0
  right: -$drawer-width
  width: $drawer-width
  height: 100vh
  background-color: $light-color
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1)
  z-index: 201
  @include transition(right)
  display: flex
  flex-direction: column

  @media (max-width: $breakpoint-md)
    width: $drawer-mobile-width
    right: -$drawer-mobile-width

  &.is-open
    right: 0

  &__header
    @include flex(space-between)
    padding: 20px
    border-bottom: 1px solid $border-color

  &__title
    font-size: 1.2rem
    font-weight: 600
    margin: 0

  &__close
    background: none
    border: none
    cursor: pointer
    color: $text-color
    @include transition

    &:hover
      color: $primary-color

  &__content
    flex: 1
    overflow-y: auto
    padding: 20px
    display: flex
    flex-direction: column


  &__empty
    text-align: center
    padding: 40px 0

    p
      margin-bottom: 20px
      color: $text-color

  &__continue
    background-color: $primary-color
    color: $light-color
    border: none
    padding: 10px 20px
    border-radius: 4px
    font-weight: 500
    cursor: pointer
    @include transition

    &:hover
      background-color: $primary-color
      opacity: 0.5

  &__items
    list-style: none
    padding: 0
    margin: 0

  &__footer
    margin-top: auto
    padding-top: 20px
    border-top: 1px solid $border-color

  &__subtotal
    @include flex(space-between)
    margin-bottom: 20px
    font-weight: 600

  &__checkout
    width: 100%
    background-color: $primary-color
    color: $light-color
    border: none
    padding: 12px
    border-radius: 4px
    font-weight: 500
    cursor: pointer
    margin-bottom: 10px
    @include transition

    &:hover
      background-color: $primary-color
      opacity: 0.5

  &__view-cart
    display: block
    width: 100%
    text-align: center
    padding: 12px
    border: 1px solid $border-color
    border-radius: 4px
    color: $text-color
    text-decoration: none
    font-weight: 500
    @include transition

    &:hover
      background-color: $border-color

// Cart Item Styles
.cart-item
  @include flex(flex-start)
  padding: 15px 0
  border-bottom: 1px solid $border-color
  position: relative

  &__image
    width: 80px
    height: 80px
    margin-right: 15px

    img
      width: 100%
      height: 100%
      object-fit: cover
      border-radius: 4px

  &__details
    flex: 1

  &__name
    font-size: 1rem
    font-weight: 500
    margin: 0 0 5px

  &__price
    font-weight: 600
    color: $primary-color
    margin: 0 0 10px

  &__quantity
    @include flex(flex-start)

    .quantity-btn
      width: 24px
      height: 24px
      border: 1px solid $border-color
      background: none
      cursor: pointer
      @include transition

      &:hover:not(:disabled)
        background-color: $border-color

      &:disabled
        opacity: 0.5
        cursor: not-allowed

    span
      width: 30px
      text-align: center

  &__remove
    background: none
    border: none
    color: $text-color
    cursor: pointer
    padding: 5px
    @include transition

    &:hover
      color: #f44336
</style>