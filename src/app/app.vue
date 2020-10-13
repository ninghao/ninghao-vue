<template>
  <h3 @click="changeName">{{ name }}</h3>
</template>

<script>
import { ref, onMounted, watch } from 'vue';

export default {
  setup() {
    const name = ref('宁皓网');

    const changeName = () => {
      name.value = 'NINGHAO';
    };

    // 生命周期
    onMounted(() => {
      console.log('mounted');
    });

    // 监视数据
    watch(name, (newName, oldName) => {
      console.log(newName, oldName);
    });

    return {
      name,
      changeName,
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
