<template>
  <div>PostShow {{ $route.params.postId }}</div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params.postId);
  },
};
</script>
