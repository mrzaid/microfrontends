<template>
  <div id="about">
    <div>
      <router-link to="/">About</router-link>|
      <router-link to="/news">About New</router-link>
    </div>
    <div>
      <span> Count: {{count}} </span>
      <button @click="increment">Increment..</button>
      <button @click="incrementIfOddOnRootSum">Action..</button>
    </div>
    <demo-input :label="'Email'" :name="'email'" :placeholder= "'Email....'" @input="inputHandler"> </demo-input>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import Input from '../shared/demo-input/input';
import { navigateTo } from '../shared/helper/index';
export default {
  components: {
    'demo-input': Input
  },
  created() { },
  computed: {
    ...mapState({
      count: state => state.about.count,
    })
  },
  methods: {
    ...mapActions("about", [
      "incrementIfOddOnRootSum"
    ]),
    ...mapMutations("about", [
      "increment"
    ]),
    navigateTo,
    inputHandler(name, value) {
      console.log('inputHandler', name, value);
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
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

