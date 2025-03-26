<template>
  <div>
    <h1>Welcome to Nuxt + SASS</h1>
    <p>A simple example on how to use SAAS with a colors.sass file.</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis omnis consequatur
      quod necessitatibus autem repellat aperiam quia atque fugit praesentium earum rerum minus,
      porro asperiores explicabo inventore animi ducimus. Itaque voluptatum facilis nobis,
      praesentium, quasi pariatur veniam veritatis quo eligendi, ratione libero impedit. Distinctio,
      delectus sapiente adipisci assumenda obcaecati aliquid exercitationem sit ad autem! Veritatis
      nihil accusamus recusandae esse?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis omnis consequatur
      quod necessitatibus autem repellat aperiam quia atque fugit praesentium earum rerum minus,
      porro asperiores explicabo inventore animi ducimus. Itaque voluptatum facilis nobis,
      praesentium, quasi pariatur veniam veritatis quo eligendi, ratione libero impedit. Distinctio,
      delectus sapiente adipisci assumenda obcaecati aliquid exercitationem sit ad autem! Veritatis
      nihil accusamus recusandae esse?
    </p>
  </div>
</template>

<style lang="sass" scoped>
h1
  @include h1
p
  color: $secondary
</style>
