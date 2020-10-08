<template>
  <h3>{{ name }}</h3>
  <input type="text" v-model.trim="content" @change="onChangeContent" />
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

  methods: {
    onChangeContent() {
      console.log(this.content, this.content.length);
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>