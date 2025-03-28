<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="social-links">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            class="social-link"
          >
            <component :is="social.icon" :size="20" class="social-icon" />
          </a>
        </div>

        <div class="copyright">© {{ currentYear }} Nuxt Shop, All rights reserved.</div>

        <div class="footer-links">
          <nuxt-link to="/" class="footer-link">Shipping & Returns</nuxt-link>
          <a href="#" class="footer-link">Cookie Preferences</a>
          <a href="https://nuxt.com" target="_blank" class="footer-link">Nuxt shop</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Youtube, Twitter, FacebookIcon, Instagram } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

// Social links data with Lucide icons
const socialLinks = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com',
    icon: Youtube
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    icon: Twitter
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    icon: FacebookIcon
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: Instagram
  }
]
</script>

<style lang="sass" scoped>
.footer
  padding: $spacing-xl 0
  background-color: $secondary-color
  color: $white
  .container
    @include container()

  .footer-content
    display: flex
    flex-direction: column
    align-items: center
    gap: $spacing-lg

  .social-links
    display: flex
    gap: $spacing-md

    .social-link
      display: flex
      align-items: center
      justify-content: center
      color: $white
      transition: color 0.2s ease

      &:hover
        color: $primary-color

      .social-icon
        width: 1.25rem
        height: 1.25rem

  .copyright
    font-size: 0.875rem
    color: $gray-medium

  .footer-links
    display: flex
    gap: $spacing-lg

    .footer-link
      font-size: 0.875rem
      color: $gray-medium

      &:hover
        color: $white

  @media (min-width: $breakpoint-md)
    .footer-content
      flex-direction: row
      justify-content: space-between
      align-items: center
</style>
