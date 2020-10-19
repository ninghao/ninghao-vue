import { createStore } from 'vuex';
import { postStoreModule } from '../post/post.store';

/**
 * 创建 Store
 */
const store = createStore({
  state: {
    appName: '宁皓网',
  },

  modules: {
    post: postStoreModule,
  },
});

/**
 * 默认导出
 */
export default store;
