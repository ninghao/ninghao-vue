<template>
  <div v-if="showPost">
    <h1>{{ post.title }}</h1>
    <div>
      {{ post.content }} - <small>{{ post.user.name }}</small>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
  title() {
    if (this.showPost) {
      return this.post.title;
    }
  },

  props: {
    postId: String,
  },

  created() {
    this.getPostById(this.postId);
  },

  computed: {
    ...mapGetters({
      loading: 'post/show/loading',
      post: 'post/show/post',
    }),

    showPost() {
      return !this.loading && this.post;
    },
  },

  methods: {
    ...mapActions({
      getPostById: 'post/show/getPostById',
    }),
  },
});
</script>
