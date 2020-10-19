<template>
  <h3>{{ name }}</h3>
</template>

<script>
export default {
  data() {
    return {
      name: '宁皓网',
    };
  },

  created() {
    console.log(this.$store.state);
  },
};
</script>

<style>
@import './styles/app.css';
</style>
