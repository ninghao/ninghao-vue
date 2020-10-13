<template>
  <h3 @click="name = 'NINGHAO'">{{ name }}</h3>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const name = ref('宁皓网');

    console.log(name.value);

    return {
      name,
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
