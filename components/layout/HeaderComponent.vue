<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <nav class="header-nav" :class="{ 'is-open': isMenuOpen }">
          <ul class="nav-list">
            <li v-for="link in navLinks" :key="link.path" class="nav-item">
              <NuxtLink :to="link.path" class="nav-link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
          <button
            class="header_menu-toggle"
            aria-label="Toggle navigation menu"
            @click="toggleMenu"
          >
            <span class="bar" />
            <span class="bar" />
            <span class="bar" />
          </button>
        </nav>

        <nuxt-link to="/" class="logo">
          <NuxtImg src="/images/icon-green.svg" alt="Store Logo" class="logo-img" />
          <span class="logo-text">Shop</span>
        </nuxt-link>

        <div class="cart">
          <button class="cart-button" aria-label="Open cart" @click="toggleCartDrawer">
            CART ({{ cartStore.itemCount }})
          </button>
        </div>
      </div>
    </div>
  </header>
  <!-- Cart Drawer Component -->
  <CartDrawer :is-open="isCartOpen" @close="closeCartDrawer" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '~/stores/cartStore'

// Define types
interface NavLink {
  path: string
  label: string
}

// Component state with TypeScript
const isMenuOpen = ref<boolean>(false)
const isCartOpen = ref<boolean>(false)
const cartStore = useCartStore()

// Navigation links array
const navLinks: NavLink[] = [
  { path: '/about', label: 'Sobre' },
  { path: '/produtos', label: 'Produtos' }
]

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

// Removed the local cart items and related methods as they're now handled by the store
</script>

<style lang="sass" scoped>
.header
  width: 100%
  height: $header-height
  background-color: $gray-light
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05)
  position: sticky
  top: 0
  z-index: 100

  @media (max-width: $breakpoint-md)
    height: $mobile-header-height

  .container
    height: 100%
    @include container

  .header-content
    @include flex(space-between)
    height: 100%

  .logo
    text-decoration: none
    @include flex(flex-start)
    color: $text-color
    font-weight: 700
    font-size: 1.25rem

    @media (max-width: $breakpoint-md)
      font-size: 1.2rem

    .logo-img
      height: 40px
      margin-right: 5px

  .header_menu-toggle
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

      &:hover
        background-color: $primary-color

  .header-nav
    @media (max-width: $breakpoint-md)
      position: fixed
      top: 0
      right: -100%
      width: 70%
      height: 100vh
      background-color: $gray-light
      box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1)
      padding: 80px 20px 20px
      @include transition(right)

      &.is-open
        right: 0

  .nav-list
    @include flex
    list-style: none
    padding: 0
    margin: 0

    @media (max-width: $breakpoint-md)
      flex-direction: column
      align-items: flex-start

  .nav-item
    margin: 0 15px

    @media (max-width: $breakpoint-md)
      margin: 15px 0
      width: 100%

  .nav-link
    font-family: $font-primary
    color: $text-color
    text-decoration: none
    font-weight: 500
    padding: 8px 0
    position: relative
    font-size: 0.875rem
    text-transform: uppercase
    letter-spacing: 0.05em
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

  .cart
    .cart-button
      font-family: $font-primary
      position: relative
      color: $text-color
      text-decoration: none
      font-weight: 500
      display: flex
      padding: 8px 0
      position: relative
      font-size: 0.875rem
      text-transform: uppercase
      letter-spacing: 0.05em
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
      background-color: $primary-color
      color: $gray-light
      font-size: 0.7rem
      font-weight: 700
      width: 20px
      height: 20px
      border-radius: 50%
      @include flex(center, center)
</style>
