import { createStore } from 'vuex';
import user, { UserState } from '@/user/user.store';

export interface RootState {
  name: string;
  loading: boolean;
  user?: UserState;
}

/**
 * 创建 Store
 */
const store = createStore({
  state: {
    name: '',
    loading: false,
  },

  getters: {
    name(state) {
      return `🎈 ${state.name}`;
    },
  },

  mutations: {
    setName(state, data) {
      state.name = data;
    },

    setLoading(state, data) {
      state.loading = data;
    },
  },

  actions: {
    getName({ commit, rootState }) {
      console.log(rootState);

      commit('setLoading', true);

      setTimeout(() => {
        const name = '宁皓网';
        commit('setName', name);
        commit('setLoading', false);
      }, 2000);
    },
  },

  modules: {
    user,
  },
});

export default store;
