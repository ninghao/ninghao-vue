<template>
  <h3>{{ name }}</h3>
  <AppButton></AppButton>
  <AppButton />
  <app-button></app-button>
  <app-button />
  <AppDemoButton />
</template>

<script>
import AppButton from './components/app-button.vue';
import AppDemoButton from './components/app-demo-button.vue';

export default {
  data() {
    return {
      name: '宁皓网',
    };
  },

  components: { AppButton, AppDemoButton },
};
</script>

<style>
@import './styles/app.css';
</style>