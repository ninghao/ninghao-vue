<template>
  <h3 @click="onClickName">
    {{ name }}
    <span v-if="loading">加载中...</span>
  </h3>
  {{ user.currentUser }}
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(['name']),
    ...mapState(['loading', 'user']),
  },

  created() {
    // this.$store.dispatch('getName');
    this.getName();
    this.getCurrentUser();
  },

  methods: {
    ...mapMutations(['setName']),

    ...mapActions({
      getName: 'getName',
      getCurrentUser: 'getCurrentUser',
    }),

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
