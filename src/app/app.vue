<template>
  <h3>{{ name }}</h3>
  <textarea v-model="content" placeholder="写点东西"></textarea>
  <span>→ Content: {{ content }}</span>
</template>

<script>
export default {
  data() {
    return {
      name: '宁皓网',
      content: '',
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>