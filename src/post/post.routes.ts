import { RouteRecordRaw } from 'vue-router';
import PostIndex from './index/post-index.vue';
import PostShow from './show/post-show.vue';

/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  {
    name: 'postIndex',
    path: '/posts',
    component: PostIndex,
  },
  {
    name: 'postShow',
    path: '/posts/:postId',
    component: PostShow,
    props: true,
  },
];

/**
 * 默认导出
 */
export default routes;
