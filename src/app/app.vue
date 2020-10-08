<template>
  <h3>{{ name }}</h3>
  <AppButton
    text="确定"
    @tap="onTapAppButton"
    @init="onInitAppButton"
  ></AppButton>
</template>

<script>
import AppButton from './components/app-button.vue';

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

  components: { AppButton },
};
</script>

<style>
@import './styles/app.css';
</style>