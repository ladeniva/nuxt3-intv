<template>
  <button @click="add">{{ buttonText }}</button>
</template>

<script>
export default {
  props: {
    buttonText: String,
  },
  methods: {
    add: function () {
      this.$emit('add', 2);
    },
  },
};
</script>
