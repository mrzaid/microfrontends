<template>
  <div class="article">
    <h1>Articles</h1>
    <demo-input :label="'Search Article'" :name="'srch_article'" :placeholder= "'Search Aticle...'" @input="inputHandler"> </demo-input>
    <demo-grid :data="articles" :columns="gridColumns" :filter-key="searchQuery" @tr-clicked="clikedHandler"></demo-grid>
  </div>
</template>
<script>

export default {
  components: { },
  mounted() { },
  data() {
    return {
      searchQuery: "",
      gridColumns: JSON.stringify(['id', 'title', 'description']),
      articles: JSON.stringify([
            {id: 'article-1', title: 'Article #1', description: 'my', image: 'https://contentwriter.in/wp-content/uploads/2018/06/Service3-1024x598.jpg'},
            {id: 'article-2', title: 'Article #2', description: 'my', image: 'https://www.geartechnology.com/blog/wp-content/uploads/2016/09/articles-004.jpg'},
            {id: 'article-3', title: 'Bunnies Ruin Captial', description: 'my', image: 'https://study.com/cimages/videopreview/practice_analyzing_and_interpreting_an_article_v2_133899.jpg'},      
            {id: 'article-4', title: 'Book Article', description: 'my', image: 'http://www.starracing.com/web/?showimage_zopa=submit+your+article.jpg'},      
        ])
    }
  },
  computed: { },
  methods: {
    clikedHandler(item) {
      this.$router.push({path: `/article/detail/${item.detail[0].id}`, props: {data: item.detail[0]}, query: {data: item.detail[0]}});
    },
    inputHandler(ev) {
      if (ev.detail instanceof Array) {
        // console.log(ev.detail[0], ev.detail[1]);
        this.searchQuery = ev.detail[1];
      }
    }
  }
};
</script>
