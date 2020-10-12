<template>
  <div class="page">
    <div class="card">
      <div class="card__header">
        <h3 class="card-title">{{ name }}</h3>
        <div class="card-subtitle">Transition & Animation</div>
      </div>
      <div class="card__content">
        <div :class="['emoji', { hidden: !isActive }]">🌲</div>
      </div>
      <div class="card__action">
        <button @click="isActive = !isActive">请按这里</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '宁皓网',
      isActive: true,
    };
  },
};
</script>

<style>
@import './styles/app.css';
@import './styles/card.css';
</style>
