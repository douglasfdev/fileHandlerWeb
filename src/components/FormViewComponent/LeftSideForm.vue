<template>
  <header>
    <h1>
      <img src="../../assets/logo.png" alt="logo">
    </h1>
  </header>
</template>

<script lang="ts" setup>
</script>

<style scoped>
  header {
    background: #0d3b66;
    width: 100%;
    height: 100%;
  }

  img {
    max-width: 50%;
    max-height: 50%;
  }

  @media only screen and (max-width: 768px) {
      header{
      width: 100%;
    }

    img {
      max-width: 25%;
      max-height: 25%;
    }
  }

</style>