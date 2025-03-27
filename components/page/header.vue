<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <!-- Logo -->
        <div class="header__logo">
          <NuxtLink to="/">
            <!--img src="/logo.svg" alt="Store Logo" class="logo-image" / -->
            <span class="logo-text">ShopVue</span>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="header__menu-toggle" aria-label="Toggle navigation menu" @click="toggleMenu">
          <span class="bar" />
          <span class="bar" />
          <span class="bar" />
        </button>

        <!-- Navigation Links - Now using the navLinks array -->
        <nav class="header__nav" :class="{ 'is-open': isMenuOpen }">
          <ul class="nav__list">
            <li v-for="link in navLinks" :key="link.path" class="nav__item">
              <NuxtLink :to="link.path" class="nav__link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Cart Button -->
        <div class="header__cart">
          <button class="cart-button" aria-label="Open cart" @click="toggleCartDrawer">
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
              class="cart-icon"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span v-if="cartItems.length > 0" class="cart-count">{{ cartItems.length }}</span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Cart Drawer Component -->
  <CartDrawer
    :is-open="isCartOpen"
    :items="cartItems"
    @close="closeCartDrawer"
    @update-quantity="updateQuantity"
    @remove-item="removeItem"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// Define types
interface NavLink {
  path: string
  label: string
}

interface CartItem {
  name: string
  price: number
  quantity: number
  image: string
}

// Component state with TypeScript
const isMenuOpen = ref<boolean>(false)
const isCartOpen = ref<boolean>(false)

// Navigation links array
const navLinks: NavLink[] = [
  { path: '/about', label: 'About' },
  { path: '/produtos', label: 'Produtos' }
]

// Sample cart items
const cartItems = ref<CartItem[]>([
  {
    name: 'Wireless Headphones',
    price: 129.99,
    quantity: 1,
    image: '/placeholder.svg?height=80&width=80'
  },
  {
    name: 'Smart Watch',
    price: 249.99,
    quantity: 1,
    image: '/placeholder.svg?height=80&width=80'
  },
  {
    name: 'Bluetooth Speaker',
    price: 79.99,
    quantity: 2,
    image: '/placeholder.svg?height=80&width=80'
  }
])

// Methods
const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value && isCartOpen.value) {
    isCartOpen.value = false
  }
}

const toggleCartDrawer = (): void => {
  isCartOpen.value = !isCartOpen.value
  if (isCartOpen.value && isMenuOpen.value) {
    isMenuOpen.value = false
  }
}

const closeCartDrawer = (): void => {
  isCartOpen.value = false
}

const updateQuantity = ({ index, change }: { index: number, change: number }): void => {
  const newQuantity = cartItems.value[index].quantity + change
  if (newQuantity > 0) {
    cartItems.value[index].quantity = newQuantity
  }
}

const removeItem = (index: number): void => {
  cartItems.value.splice(index, 1)
}
</script>

<style lang="sass" scoped>
// Header Styles
.header
  width: 100%
  height: $header-height
  background-color: $light-color
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05)
  position: sticky
  top: 0
  z-index: 100

  @media (max-width: $breakpoint-md)
    height: $mobile-header-height

  .container
    height: 100%
    @include container

  &__content
    @include flex(space-between)
    height: 100%

  &__logo
    a
      @include flex(flex-start)
      text-decoration: none
      color: $text-color
      font-weight: 700
      font-size: 1.5rem

    .logo-image
      height: 40px
      margin-right: 10px

  &__menu-toggle
    display: none
    background: none
    border: none
    cursor: pointer
    padding: 10px
    z-index: 101

    @media (max-width: $breakpoint-md)
      display: block

    .bar
      display: block
      width: 25px
      height: 3px
      margin: 5px 0
      background-color: $text-color
      @include transition

    &:hover .bar
      background-color: $primary-color

  &__nav
    @media (max-width: $breakpoint-md)
      position: fixed
      top: 0
      right: -100%
      width: 70%
      height: 100vh
      background-color: $light-color
      box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1)
      padding: 80px 20px 20px
      @include transition(right)

      &.is-open
        right: 0

    .nav__list
      @include flex
      list-style: none
      padding: 0
      margin: 0

      @media (max-width: $breakpoint-md)
        flex-direction: column
        align-items: flex-start

    .nav__item
      margin: 0 15px

      @media (max-width: $breakpoint-md)
        margin: 15px 0
        width: 100%

    .nav__link
      color: $text-color
      text-decoration: none
      font-size: 1rem
      font-weight: 500
      padding: 8px 0
      position: relative
      @include transition

      &::after
        content: ''
        position: absolute
        bottom: 0
        left: 0
        width: 0
        height: 2px
        background-color: $primary-color
        @include transition

      &:hover, &.router-link-active
        color: $primary-color

        &::after
          width: 100%

      @media (max-width: $breakpoint-md)
        display: block
        padding: 10px 0
        font-size: 1.1rem

  &__cart
    .cart-button
      position: relative
      display: inline-block
      padding: 8px
      color: $text-color
      background: none
      border: none
      cursor: pointer
      @include transition

      &:hover
        color: $primary-color

    .cart-icon
      width: 24px
      height: 24px

    .cart-count
      position: absolute
      top: 0
      right: 0
      background-color: $primary-color
      color: $light-color
      font-size: 0.7rem
      font-weight: 700
      width: 18px
      height: 18px
      border-radius: 50%
      @include flex(center, center)
</style>
