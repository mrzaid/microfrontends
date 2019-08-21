<template>
  <div class="article-add">
    <h1>Add new Article</h1>
    <demo-input :label="'Title'" :name="'title'" :placeholder= "'title please'" @input="inputHandler"> </demo-input>
    <demo-input :label="'Description'" :name="'description'" :placeholder= "'description please'" @input="inputHandler"> </demo-input>
    <div>
      <span style="margin-bottom: 10px;">Simple Image Upload Component</span>
      <demo-input :type="'file'" :label="'Image'" :name="'image'" :placeholder= "'image please'" @input="inputHandler"> </demo-input>
    </div>
    <hr />
    <div style="margin: 10px">
      <demo-image-picker-modal @imageSelected="imageSelectHandler" />
    </div>
    <hr />
    <div style="margin: 10px">
      <span style="margin-top: 10px; margin-bottom: 10px;"> Select Article Image </span>
      <demo-image-picker @imageSelected="imageSelectHandler" />
    </div>
    <hr />
    <div style="margin-top: 20px;">
      <button @click="newArticle">Submit/Add Article</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import Input from '../../shared/demo-input/input';
import { navigateTo } from '../../shared/helper/index';
import ImagePicker from '../../shared/demo-image-picker/image-picker';
import ImagePickerModal from '../../shared/demo-image-picker-modal/image-picker';

export default {
  components: { 
    'demo-input': Input,
    'demo-image-picker': ImagePicker,
    'demo-image-picker-modal': ImagePickerModal
  },
  data() {
    return {
      searchQuery: "",
      gridColumns: ['id', 'title', 'description'],
      article: {}
    }
  },
  computed: {
    ...mapState({
      articles: state => state.article.articles,
    })
  },
  methods: {
    ...mapMutations("article", ["addArticle"]),
    navigateTo,
    inputHandler(name, value) {
      this.article[name] = value;
    },
    newArticle() {
      const {title, description} = this.article;
      const payload = {id: `article-${this.articles.length+1}`, title, description, image: 'https://www.wikihow.com/images/thumb/f/fa/Write-Articles-Step-1-Version-4.jpg/aid25987-v4-728px-Write-Articles-Step-1-Version-4.jpg'}
      this.addArticle(payload);
      this.navigateTo('/article');
    },
    imageSelectHandler(data) {
      console.log('image picker data', data)
    }
    
  }
  
}
</script>