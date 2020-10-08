<template>
  <h3>{{ name }}</h3>
  <input type="text" :value="content" @input="content = $event.target.value" />
  <span>→ Content: {{ content }}</span>
</template>

<script>
export default {
  data() {
    return {
      name: '宁皓网',
      content: '天地玄黄',
    };
  },

  methods: {},
};
</script>

<style>
@import './styles/app.css';
</style>