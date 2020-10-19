import { Module } from 'vuex';
import { RootState } from '../../app/app.store';

export interface PostCreateStoreState {
  loading: boolean;
}

export const postCreateStoreModule: Module<PostCreateStoreState, RootState> = {
  namespaced: true,

  state: {
    loading: false,
  } as PostCreateStoreState,

  getters: {
    loading(state) {
      return state.loading;
    },
  },
};
