<template>
  <div class="article">
    <h1>Articles</h1>
    <demo-grid :data="articles" :columns="gridColumns" :filter-key="searchQuery" @tr-clicked="clikedHandler"></demo-grid>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import DemoGird from '../../shared/demo-grid/demo-grid';
export default {
  components: {
    'demo-grid': DemoGird
  },
  data() {
    return {
      searchQuery: "",
      gridColumns: ['id', 'title', 'description'],
    }
  },
  computed: {
    ...mapState({
      articles: state => state.article.articles,
    })
  },
  methods: {
    navigateTo: url => window.history.pushState(null, null, url),
    clikedHandler(item) {
      console.log('item.....', item.title);
      this.navigateTo(`/article/${item.id}`);
    }
  }
  
}
</script>
