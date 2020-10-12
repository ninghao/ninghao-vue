<template>
  <div class="page">
    <div class="card">
      <div class="card__header">
        <h3 class="card-title">{{ name }}</h3>
        <div class="card-subtitle">Transition & Animation</div>
      </div>
      <div class="card__content">
        <transition-group
          name="custom"
          leave-active-class="animate__animated animate__tada"
        >
          <div class="emoji" v-for="emoji in emojiList" :key="emoji">
            {{ emoji }}
          </div>
        </transition-group>
      </div>
      <div class="card__action">
        <button @click="shuffle" :class="{ active: isActive }">
          请按这里
        </button>
        <button @click="pop">
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
import _ from 'lodash';

export default {
  data() {
    return {
      name: '宁皓网',
      isActive: true,
      emojiList: ['🌲 ', '🌳 ', '🌴'],
    };
  },

  methods: {
    shuffle() {
      this.emojiList = _.shuffle(this.emojiList);
    },

    pop() {
      this.emojiList.pop();
    },
  },
};
</script>

<style>
@import './styles/app.css';
@import './styles/card.css';
@import './styles/animate.css';
</style>
