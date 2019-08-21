<template>
  <div>
      <h1>Auth/Login Module</h1>
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
    ...mapState(["jwtToken"])
  },
  created() {
    console.log()
  },
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
