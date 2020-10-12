<template>
  <div class="page">
    <div class="card">
      <div class="card__header">
        <h3 class="card-title">{{ name }}</h3>
        <div class="card-subtitle">Transition & Animation</div>
      </div>
      <div class="card__content">
        <transition
          name="custom-classes"
          enter-active-class="animate__animated animate__tada"
          leave-active-class="animate__animated animate__bounce"
          mode="out-in"
        >
          <component :is="currentEmoji"></component>
        </transition>
      </div>
      <div class="card__action">
        <button @click="isActive = !isActive" :class="{ active: isActive }">
          请按这里
        </button>
      </div>
    </div>
    <div class="status">
      <small>isActive: {{ isActive }}</small>
    </div>
  </div>
</template>

<script>
import GhostEmoji from './components/ghost-emoji.vue';
import RobotEmoji from './components/robot-emoji.vue';

export default {
  data() {
    return {
      name: '宁皓网',
      isActive: true,
      emoji: 'GhostEmoji',
    };
  },

  computed: {
    currentEmoji() {
      return this.isActive ? 'GhostEmoji' : 'RobotEmoji';
    },
  },

  components: {
    GhostEmoji,
    RobotEmoji,
  },
};
</script>

<style>
@import './styles/app.css';
@import './styles/card.css';
@import './styles/animate.css';
</style>
