<template>
  <div>
    <input type="text" placeholder="用户名" v-model="name" />
    <input type="password" placeholder="密码" v-model="password" />
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      password: '',
    };
  },

  methods: {
    async login() {
      console.log(this.name, this.password);
    },
  },
};
</script>
