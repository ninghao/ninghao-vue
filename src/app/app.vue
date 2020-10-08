<template>
  <h3>{{ name }}</h3>
  <input type="text" v-model.number="content" @change="onChangeContent" />
  <span>→ Content: {{ content }}</span>
</template>

<script>
export default {
  data() {
    return {
      name: '宁皓网',
      content: 0,
    };
  },

  created() {
    console.log('content 数据的类型（组件创建时）：', typeof this.content);
  },

  methods: {
    onChangeContent() {
      console.log('content 数据的类型（元素值变化后）：', typeof this.content);
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>