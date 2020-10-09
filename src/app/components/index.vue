<template>
  <div @click="onClickText">你好，欢迎访问宁皓网！</div>
</template>

<script>
export default {
  methods: {
    onClickText() {
      this.$router.push({ name: 'about' });
      // this.$router.replace('/about');
    },
  },
};
</script>
