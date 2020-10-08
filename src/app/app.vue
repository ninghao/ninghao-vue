<template>
  <h3>{{ name }}</h3>
  <input type="text" @keyup.enter="onKeyupInput" />
</template>

<script>
export default {
  data() {
    return {
      name: '宁皓网',
    };
  },

  methods: {
    onKeyupInput(event) {
      // if (event.key === 'Enter') {
      //   console.log('回车！');
      // }
      console.log('回车！');
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>