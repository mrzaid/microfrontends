<template>
  <div id="demo-input">
    <label>{{label}}</label>
    <input :type="type"
           :name="name"
           :value="value"
           @input="inputHandler($event)"
           :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    name: {
    type: String,
    default: `input-${Date.now()}`,
    required: false,
    },
    type: {
      type: String,
      default: "text",
      required: false
    },
    value: {
      type: [String, Number],
      required: false
    },
    placeholder: {
    type: String,
    required: false,
    default: 'Placeholder'
    },
    label: {
      type: String,
      required: false,
      default: 'Label'
    }
  },
  methods: {
    inputHandler(ev) {
      const val = (ev.target.type != 'file') ? ev.target.value : ev.target.files;
      this.$emit('input', ev.target.name, val);
    }
  }
};
</script>