<template>
  <div>  
    <!-- Modal Trigger -->
    <a class="waves-effect waves-light btn pink darken-1 modal-trigger" href="#demo-modal">Image Picker Modal</a>
    <!-- Modal Structure -->
    <div id="demo-modal" class="modal">
      <div class="modal-content" style="display: flex; justify-content: center;">
        <demo-image-picker @imageSelected="imageSelected" />
      </div>
      <div class="modal-footer"></div>
      <a class="modal-action modal-close waves-effect waves-red btn red lighten-1">Cancel</a>
      <a class="modal-action modal-close waves-effect waves-red btn red lighten-1" @click="imageSelected">Done</a>
    </div>
  </div>
</template>

<script>
import ImagePicker from '../demo-image-picker/image-picker';
export default {
  components: {
    'demo-image-picker': ImagePicker
  },
  data() {
    return {
      image: null,
      selectedfile: null
    }
  },
  mounted() {
    $('.modal').modal();
  },
  methods: {
    divClickHandler() {
      this.$refs["imgPicker"].click()
    },
    imageSelected(ev) {
      ev ? this.selectedfile = ev : null;
      this.$emit('imageSelected', this.selectedfile);
    },
    // changeHandler({target}) {
    //   console.log('changeHandler ', target.files);
    //   this.selectedfile = target.files;
    //     if (this.selectedfile.length > 0) {
    //       var imageFile = this.selectedfile[0];
    //       var fileReader = new FileReader();
    //       fileReader.onload = function(fileLoadedEvent) {
    //         var srcData = fileLoadedEvent.target.result;
    //         var newImage = document.createElement('img');
    //         newImage.src = srcData;
    //         newImage.style = "width auto; height: 200px;"
    //         document.getElementById("selectedImage").innerHTML = newImage.outerHTML;
    //       }
    //       fileReader.readAsDataURL(imageFile);
    //     }
    // }
  }
};
</script>