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
    <div>
      <demo-image-picker-modal @imageSelected="imageSelectHandler"></demo-image-picker-modal>
    </div>
    <hr />
    <div style="margin: 10px">
      <span style="margin-top: 10px; margin-bottom: 10px;"> Select Article Image </span>
      <image-app @imageSelected="imageSelectHandler" />
    </div>
    <hr />
    <div style="margin-top: 20px;">
      <button @click="newArticle">Submit/Add Article</button>
    </div>
  </div>
</template>
<script>
import DemoImagePickerModal from '../components/image-modal';

export default {
  components: { 
    "demo-image-picker-modal": DemoImagePickerModal
  },
  data() {
    return {
      article: {}
    }
  },
  computed: { },
  methods: {
    inputHandler(name, value) {
      if(name.detail instanceof Array) {
        this.article[name.detail[0]] = name.detail[1];
      }
    },
    newArticle() {
      const {title, description} = this.article;
      const payload = {id: `article-${Date.now()}`, title, description, image: 'https://www.wikihow.com/images/thumb/f/fa/Write-Articles-Step-1-Version-4.jpg/aid25987-v4-728px-Write-Articles-Step-1-Version-4.jpg'}
      console.log('new payload ', payload);
      // this.addArticle(payload);
      this.$router.push('/article');
    },
    imageSelectHandler(data) {
      if(data.detail instanceof Array) {
        console.log('image picker data', data.detail[0])
      }
    }
    
  }
  
}
</script>