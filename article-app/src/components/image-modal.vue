<template>
  <div>  
    <!-- Modal Trigger -->
    <a class="waves-effect waves-light btn pink darken-1 modal-trigger" href="#demo-modal">Image Picker Modal</a>
    <!-- Modal Structure -->
    <div id="demo-modal" class="modal">
      <div class="modal-content" style="display: flex; justify-content: center;">
        <image-app @imageSelected="imageSelected" />
      </div>
      <div class="modal-footer"></div>
      <a class="modal-action modal-close waves-effect waves-red btn red lighten-1">Cancel</a>
      <a class="modal-action modal-close waves-effect waves-red btn red lighten-1" @click="imageSelected">Done</a>
    </div>
  </div>
</template>

<script>
export default {
  components: { },
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
    }
  }
};
</script>