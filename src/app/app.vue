<template>
  <h3 @click="onClickName">{{ name }}</h3>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(['name']),
  },

  methods: {
    ...mapMutations(['setName']),

    onClickName() {
      if (this.$store.state.name === '宁皓网') {
        // this.$store.commit('setName', 'NINGHAO');
        this.setName('NINGHAO');
      } else {
        // this.$store.commit('setName', '宁皓网');
        this.setName('宁皓网');
      }
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>
