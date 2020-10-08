<template>
  <h3>{{ name }}</h3>
  <select v-model="category">
    <option value="">- 选择分类 -</option>
    <option value="development">应用开发</option>
    <option value="game">游戏开发</option>
  </select>
  <span>→ Category: {{ category }}</span>
</template>

<script>
export default {
  data() {
    return {
      name: '宁皓网',
      category: '',
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>