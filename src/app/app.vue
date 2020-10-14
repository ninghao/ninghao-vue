<template>
  <h3>{{ name }}</h3>
  <div v-for="post in posts" :key="post.id">
    {{ post.title }} -
    <small>{{ post.user.name }}</small>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '宁皓网',
      posts: [],
    };
  },

  created() {
    axios.get('http://localhost:3000/posts').then(response => {
      console.log(response);
      this.posts = response.data;
    });
  },
};
</script>

<style>
@import './styles/app.css';
</style>
