<template>
<Layout>

  <!-- Learn how to use images here: https://gridsome.org/docs/images -->
  <g-image alt="Example image" src="~/favicon.png" width="135" />

  <h1 class="text-green-700 text-2xl mt-5 mb-3 font-bold">Hello, world!</h1>

  <p class="text-gray-700 text-lg mb-3">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
  </p>

  <a class="underline text-blue-600 mr-3" href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
  <a class="underline text-blue-600" href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>

</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
