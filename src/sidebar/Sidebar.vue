<template>
  <div id="sidebar">
    <h1>Sidebar</h1>
    <ul>
      <li v-for="(item, index) in modules" :key="index">
        <a @click="navigateTo(item.path)">{{item.name}}</a>  
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  components: {},
  computed: {
    ...mapState(["jwtToken", "modules"])
  },
  created() {},
  methods: {
    navigateTo: url => window.history.pushState(null, null, url)
  }
};
</script>

<style lang="scss">
:root {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
#sidebar {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
