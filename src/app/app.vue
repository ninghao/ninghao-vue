<template>
  <h3>{{ name }}</h3>
  <div v-for="(post, index) in postList" :key="post.id">
    {{ index + 1 }} {{ post.content }} - <small>{{ post.author }}</small>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'NINGHAO',

      postList: [
        {
          id: 1,
          content: '故人西辞黄鹤楼，烟花三月下扬州',
          author: '李白',
        },
        {
          id: 2,
          content: '好雨知时节，当春乃发生',
          author: '杜甫',
        },
        {
          id: 3,
          content: '浔阳江头夜送客，枫叶荻花秋瑟瑟',
          author: '白居易',
        },
      ],
    };
  },
};
</script>

<style>
</style>