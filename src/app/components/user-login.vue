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

  beforeCreate() {
    console.log('user login before create');
  },

  created() {
    console.log('user login created');
  },

  beforeMount() {
    console.log('user login before mount');
  },

  mounted() {
    console.log('user login mounted');
  },

  beforeUpdate() {
    console.log('user login before update');
  },

  updated() {
    console.log('user login updated');
  },

  unmounted() {
    console.log('user login unmounted');
  },

  components: { AppInput },
};
</script>