<template>
  <div id="app">
    <nav>
      <router-link to="/">File</router-link> |
      <router-link to="/person">Person</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 8.5px;
  background: #0d3b66;
}

nav a {
  font-weight: bold;
  color: #fff;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav:nth-child(1) {
  color: #fff5;
  font-weight: 600;
}
</style>
