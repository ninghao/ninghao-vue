<template>
  <h3>{{ name }}</h3>
  <div class="menu">
    <div
      :class="['menu-item', { active: currentItem === index }]"
      @click="currentItem = index"
      v-for="(item, index) in menuItems"
      :key="index"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '宁皓网',
      menuItems: ['首页', '热门', '发布'],
      currentItem: 0,
    };
  },
};
</script>

<style>
.menu {
  display: flex;
  gap: 16px;
}

.active {
  color: #6435c9;
}
</style>