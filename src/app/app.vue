<template>
  <h3>{{ name }}</h3>
  <AppButton></AppButton>
  <AppButton />
  <app-button></app-button>
  <app-button />
</template>

<script>
import AppButton from './components/app-button.vue';

export default {
  data() {
    return {
      name: '宁皓网',
    };
  },

  components: { AppButton },
};
</script>

<style>
@import './styles/app.css';
</style>