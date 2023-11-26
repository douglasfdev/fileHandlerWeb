<template>
  <header>
    <h1>
      <img src="../../assets/logo.png" alt="logo">
    </h1>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'LeftSideApp',
  })
</script>

<style scoped>
  header {
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    padding: 0.25rem;
  }

  @media only screen and(max-width: 768px) {
      header{
      padding: 2.rem;
      height: auto;
    }
  }

</style>