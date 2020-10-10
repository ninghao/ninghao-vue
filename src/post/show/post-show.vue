<template>
  <div>PostShow {{ postId }}</div>
  <router-view></router-view>
</template>

<script>
export default {
  props: {
    postId: String,
  },

  created() {
    console.log(this.$route.params.postId);
  },
};
</script>
