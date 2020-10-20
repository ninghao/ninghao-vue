import { ComponentOptions, ComponentPublicInstance } from 'vue';
import { APP_NAME } from './app.config';

/**
 * 设置页面标题
 */
const setTitle = (vm: ComponentPublicInstance) => {
  // 获取组件里的 title 选项
  const { title } = vm.$options;

  if (title) {
    let titleContent;

    if (typeof title === 'function') {
      // 执行 title
      titleContent = title.call(vm);
    } else {
      titleContent = title;
    }

    document.title = `${titleContent} - ${APP_NAME}`;
  }

  if (vm.$route.path === '/') {
    document.title = APP_NAME;
  }
};

/**
 * 标题混合
 */
export const titleMixin: ComponentOptions = {
  created() {
    setTitle(this);
  },

  updated() {
    setTitle(this);
  },
};
