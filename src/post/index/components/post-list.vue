<template>
  <div v-if="loading">加载中...</div>
  <PostListItem v-for="post in posts" :item="post" :key="post.id" />
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import PostListItem from './post-list-item';

export default defineComponent({
  async created() {
    this.getPosts();
  },

  computed: {
    ...mapGetters({
      loading: 'post/index/loading',
      posts: 'post/index/posts',
    }),
  },

  methods: {
    ...mapActions({
      getPosts: 'post/index/getPosts',
    }),
  },

  components: {
    PostListItem,
  },
});
</script>
