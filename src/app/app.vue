<template>
  <h3>{{ name }}</h3>
  {{ processStatus }}
</template>

<script>
export default {
  data() {
    return {
      name: 'NINGHAO',
    };
  },

  computed: {
    processStatus() {
      return this.name === 'NINGHAO' ? '初始化...' : '成功设置了数据！';
    },
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