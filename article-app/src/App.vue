<template>
  <div id="article">
    <hr />
    <h1>Article App</h1>
    <div id="nav">
      <router-link to="/article">Articles</router-link> |
      <router-link to="/article/add">New Article</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>;
// import "../libraries.js";
import initRouter from "./initRouter.js";

initRouter();
export default {
  methods: {
    navigateTo: function(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
