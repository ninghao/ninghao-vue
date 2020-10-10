<template>
  <h3>{{ name }}</h3>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(['name']),
  },
};
</script>

<style>
@import './styles/app.css';
</style>
