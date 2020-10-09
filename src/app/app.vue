<template>
  <div class="page">
    <div class="page-header">
      <h3 class="brand">{{ name }}</h3>
      <div class="menu">
        <router-link class="menu-item" to="/">首页</router-link>
        <router-link class="menu-item" to="/about">关于</router-link>
      </div>
    </div>
    <div class="page-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '宁皓网',
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
