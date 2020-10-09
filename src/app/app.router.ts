import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [];

/**
 * 创建路由器
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
