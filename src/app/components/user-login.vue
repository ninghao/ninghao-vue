<template>
  <div>用户登录 {{ username }}</div>
  <AppInput v-model="username" />
</template>

<script>
import AppInput from './app-input.vue';

export default {
  data() {
    return {
      username: '',
    };
  },

  components: { AppInput },
};
</script>