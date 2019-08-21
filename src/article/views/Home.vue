<template>
  <div class="article">
    <h1>Articles</h1>
    <demo-input :label="'Search Article'" :name="'srch_article'" :placeholder= "'Search Aticle...'" @input="inputHandler"> </demo-input>
    <demo-grid :data="articles" :columns="gridColumns" :filter-key="searchQuery" @tr-clicked="clikedHandler"></demo-grid>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import DemoGird from '../../shared/demo-grid/demo-grid';
import Input from '../../shared/demo-input/input';

import { navigateTo } from '../../shared/helper/index';
export default {
  components: {
    'demo-grid': DemoGird,
    'demo-input': Input
  },
  mounted() { },
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
    navigateTo,
    clikedHandler(item) {
      console.log('item.....', item.title);
      this.navigateTo(`/article/${item.id}`);
    },
    inputHandler(name, value) {
      this.searchQuery = value;
    }
  } 
}
</script>
