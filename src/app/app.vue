<template>
  <h3>{{ name }}</h3>
  <label for="subscription-annual">
    <input
      id="subscription-annual"
      type="radio"
      value="annual"
      v-model="subscription"
    />
    一年
  </label>
  <label for="subscription-quarterly">
    <input
      id="subscription-quarterly"
      type="radio"
      value="quarterly"
      v-model="subscription"
    />
    季度
  </label>
  <span>→ Subscription: {{ subscription }}</span>
</template>

<script>
export default {
  data() {
    return {
      name: '宁皓网',
      subscription: 'annual',
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>