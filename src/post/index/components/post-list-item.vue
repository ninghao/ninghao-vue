<template>
  <h3>
    {{ item.title }} - <small>{{ item.user.name }}</small>
  </h3>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    item: Object,
  },
});
</script>
