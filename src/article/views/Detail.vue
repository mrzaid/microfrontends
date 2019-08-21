<template>
  <div class="about">
    <h1>Article Detail of {{ $route.params.id }}</h1>

    <div v-if="!isEditable">
      {{article}}
    </div>
    <div v-else>
        <demo-input :label="'Title'" :name="'title'" :value="article.title" :placeholder= "'title please'" @input="inputHandler"> </demo-input>
        <demo-input :label="'Description'" :name="'description'" :value="article.description" :placeholder= "'description please'" @input="inputHandler"> </demo-input>
    </div>

    <div>
      <button class="waves-effect waves-light  light-blue btn-text" @click="editable" v-if="!isEditable">Edit Article</button>
      <button class="waves-effect waves-light teal btn-text" @click="gotoArticles" v-else>Update</button>
    </div>
    <div>
      <button class="waves-effect waves-light red lighten-1 btn-text" @click="deleteArticle">Delete</button>
    </div>
    <button class="waves-effect waves-light blue-grey btn-text" @click="gotoArticles">Goto Articles</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Input from '../../shared/demo-input/input';
import { navigateTo } from '../../shared/helper/index';
export default {
  components: { 
    'demo-input': Input
  },
  data() {
    return {
      article: {},
      isEditable: false
    }
  },
  computed: {
    ...mapState({
      articles: state => state.article.articles,
    })
  },
  created() {
    this.article = this.articles.find(a => a.id == this.$route.params.id);
  },
  methods: {
    navigateTo,
    editable() {
      this.isEditable = true;
    },
    gotoArticles() {
      this.navigateTo('/article');
    },
    inputHandler(name, value) {

    },
    deleteArticle() {
      var _conf = confirm('Are you sure you want to delete');
      console.log(_conf);
      if(_conf) {
        this.navigateTo('/article');
      }
    }
  }
  
}
</script>
<style scoped>
.btn-text {
  padding: 5px;
  font-weight: 500;
  color: white;
}
</style>