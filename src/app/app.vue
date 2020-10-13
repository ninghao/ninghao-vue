<template>
  <h3 @click="name = 'NINGHAO'">{{ name }}</h3>
</template>

<script>
export default {
  setup() {
    const name = '宁皓网';

    return {
      name,
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
