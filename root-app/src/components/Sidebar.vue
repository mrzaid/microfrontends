<template>
  <div id="sidebar">
    <h1>Sidebar</h1>
    <ul>
      <li v-for="(item, index) in modules" :key="index">
        <a :href="item.path">{{item.name}}</a>  
      </li>
    </ul>
  </div>
</template>

<script>
  const modules =  require('../../modules.json');
  const routes = modules.routes.filter(r => r.showRoute).map(r => {
    return { path: r.path, name: r.name }
  });

export default {
  components: { },
  data() {
    return {
      modules: routes
    }
  }
};
</script>

<style lang="scss">
:root {
  color: #2c3e50;
}
#sidebar {
  background: #f6f6f6; width: 20%; padding: 10px;
  height: -webkit-fill-available; 
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
