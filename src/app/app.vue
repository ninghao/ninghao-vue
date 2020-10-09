<template>
  <h3>{{ name }}</h3>
  <UserProfile />
</template>

<script>
import UserProfile from './components/user-profile.vue';

export default {
  data() {
    return {
      name: '宁皓网',
    };
  },

  methods: {
    onTapAppButton(text) {
      console.log('on tap app button', text);
    },

    onInitAppButton() {
      console.log('on init app button');
    },
  },

  components: { UserProfile },
};
</script>

<style>
@import './styles/app.css';
</style>