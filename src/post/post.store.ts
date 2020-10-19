import { postCreateStoreModule } from './create/post-create.store';

export const postStoreModule = {
  namespaced: true,

  modules: {
    create: postCreateStoreModule,
  },
};
