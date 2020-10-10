<template>
  <div>PostShow {{ $route.params.postId }}</div>
  <router-view></router-view>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params.postId);
  },
};
</script>
