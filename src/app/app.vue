<template>
  <h3 @click="name = 'NINGHAO'">{{ name }}</h3>
</template>

<script>
export default {
  data() {
    return {
      name: '宁皓网',
    };
  },

  created() {
    console.log(this.$data);
  },
};
</script>

<style>
@import './styles/app.css';
</style>
