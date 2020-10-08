<template>
  <h3>{{ name }}</h3>
  <label for="tag-1">
    <input id="tag-1" type="checkbox" value="大明湖" v-model="tags" />
    大明湖
  </label>
  <label for="tag-2">
    <input id="tag-2" type="checkbox" value="黑虎泉" v-model="tags" />
    黑虎泉
  </label>
  <label for="tag-3">
    <input id="tag-3" type="checkbox" value="趵突泉" v-model="tags" />
    趵突泉
  </label>
  <span>→ Tags: {{ tags }}</span>
</template>

<script>
export default {
  data() {
    return {
      name: '宁皓网',
      tags: [],
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>