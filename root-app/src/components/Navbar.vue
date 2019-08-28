<template>
  <div id="nav">
    <a href="/">Home</a>
    <a href="/article/">Article</a>
  </div>
</template>

<script>
export default {
  components: { },
  methods: {
    navigateTo: url => window.history.pushState(null, null, url)
  }, 
  created() { }
};
</script>

<style lang="scss">
:root {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  a {
    margin-right: 20px;
  }
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
