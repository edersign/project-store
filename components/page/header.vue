<template>
  <header class="page-header">
    <nav class="container">
      <NuxtLink to="/">Store</NuxtLink>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">Sobre</NuxtLink></li>
        <li><NuxtLink to="/produtos">Produtos</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="sass" scoped>
.page-header
  border: 1px solid #9eb9e3
  padding: 1rem
  position: relative
  background-color: #9eb9e387
</style>
