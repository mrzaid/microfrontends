<template>
  <div id="app">
    <nav-bar />
    <div style="display: flex;">
      <side-bar />
      <div id="outlet"></div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import initRouter from './initRouter';

export default {
  name: 'app',
  data() {
    return {
      jwtToken: null
    }
  },
  components: { 
    'nav-bar': Navbar,
    'side-bar': Sidebar
  },
  created() {
    const jwtToken = localStorage.jwtToken;
    if (jwtToken) {
      this.jwtToken = jwtToken;
    }
  },
  mounted() {
    initRouter(this.jwtToken);
  }
}
</script>
