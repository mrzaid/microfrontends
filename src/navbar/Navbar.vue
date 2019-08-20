<template>
  <div id="nav">
    <router-link to="/">Home</router-link> <b> | </b>
    <router-link to="/about">About</router-link> <b> | </b>
    <router-link to="/article">Article</router-link>
  </div>
</template>

<style lang="scss">
:root {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #ffff;
}
#nav {
  padding: 30px;
  width: 100%;
  background: #0085e4;
  color: #ffff;
  a {
    font-weight: bold;
    color: #ffff;
    &.router-link-exact-active {
      color: #ffff;
    }
  }
}
</style>
