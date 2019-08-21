<template>
  <div id="sidebar">
    <h1>Sidebar</h1>
    <ul>
      <li v-for="(item, index) in modules" :key="index">
        <a @click="navigateTo(item.path)">{{item.name}}</a>  
      </li>
    </ul>
    <!-- <demo-image-picker @imageSelected="imageSelectHandler" /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ImagePicker from '../shared/demo-image-picker/image-picker';
import { navigateTo } from '../shared/helper/index';
export default {
  components: {
    'demo-image-picker': ImagePicker
  },
  computed: {
    ...mapState(["jwtToken", "modules"])
  },
  created() {},
  methods: {
    navigateTo,
    imageSelectHandler(f) {

    }
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
