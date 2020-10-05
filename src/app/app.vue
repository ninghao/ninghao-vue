<template>
  <h3>{{ name }}</h3>
</template>

<script>
export default {
  data() {
    return {
      name: 'NINGHAO',
    };
  },

  created() {
    console.log('App 组件已创建！');

    this.setName();
  },

  methods: {
    setName() {
      setTimeout(() => {
        this.name = '宁皓网';
      }, 3000);
    },
  },
};
</script>