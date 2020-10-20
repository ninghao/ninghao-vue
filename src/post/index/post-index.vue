<template>
  <PostList />
</template>

<script>
import { defineComponent } from 'vue';
import PostList from './components/post-list';

export default defineComponent({
  title() {
    return '内容列表';
  },

  components: {
    PostList,
  },
});
</script>
