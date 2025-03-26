<template>
  <div>
    <page-header sticky />
    <main class="container">
      <slot />
    </main>
    <footer>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/produtos">Produtos</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<style lang="sass" scoped>
.container
  border: 1px solid #b9e39e
  padding: 1rem
  position: relative
  background-color: #b8e39e87
</style>
