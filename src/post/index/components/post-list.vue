<template>
  <PostListItem v-for="post in posts" :item="post" :key="post.id" />
</template>

<script>
import { defineComponent } from 'vue';
import PostListItem from './post-list-item';
import { apiHttpClient } from '@/app/app.service';

export default defineComponent({
  data() {
    return {
      posts: [],
    };
  },

  async created() {
    const response = await apiHttpClient.get('/posts');
    this.posts = response.data;
  },

  components: {
    PostListItem,
  },
});
</script>
