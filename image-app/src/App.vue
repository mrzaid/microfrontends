<template>
  <div id="image-picker">  
    <div @click="divClickHandler" ref="selectedImage">
      <img src="http://icons.iconarchive.com/icons/iconsmind/outline/256/Cursor-Select-icon.png" alt="img" width="100" height="100" />
    </div>
    <input type="file" name="imgPicker" ref="imgPicker" style="display: none;" accept=".jpg, .jpeg, .png" @change="changeHandler" />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      image: null,
      selectedfile: null
    }
  },
  mounted() { },
  methods: {
    divClickHandler() {
      this.$refs["imgPicker"].click()
    },
    imageSelected() {
      this.$emit('imageSelected', this.selectedfile)
    },
    changeHandler({target}) {
      this.selectedfile = target.files;
      if (this.selectedfile.length > 0) {
        var imageFile = this.selectedfile[0];
        var fileReader = new FileReader();
        fileReader.onload = (fileLoadedEvent) => {
          var srcData = fileLoadedEvent.target.result;
          var newImage = document.createElement('img');
          newImage.src = srcData;
          newImage.style = "width auto; height: 150px;"
          this.$refs["selectedImage"].innerHTML = newImage.outerHTML;
        }
        fileReader.readAsDataURL(imageFile);
        this.imageSelected(); // output
      }
    }
  }
};
</script>