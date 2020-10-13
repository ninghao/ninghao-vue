<template>
  <h3 @click="name = 'NINGHAO'">{{ name }}</h3>
  <div @click="username = 'WANGHAO'">{{ username }}</div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue';

export default {
  setup() {
    const name = ref('宁皓网');

    const user = reactive({
      username: '王皓',
    });

    // const { username } = toRefs(user);

    return {
      name,
      ...toRefs(user),
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
