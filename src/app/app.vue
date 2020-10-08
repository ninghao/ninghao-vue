<template>
  <h3>{{ name }}</h3>
  <input id="checked" type="checkbox" v-model="checked" />
  <label for="checked">→ Checked: {{ checked }}</label>
</template>

<script>
export default {
  data() {
    return {
      name: '宁皓网',
      checked: true,
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>