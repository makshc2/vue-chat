import { firebaseResetPassword } from '@/services/firebase/resetPassword.services';
import mutations from '../mutation';

const {
  LOGIN_LOADER,
} = mutations;

const resetPasswordStore = {
  namespaced: true,
  state: {
    loginInProgress: false,
  },
  getters: {
    loginInProgress: ({ loginInProgress }) => loginInProgress,
  },
  mutations: {
    [LOGIN_LOADER](state, bool) {
      state.loginInProgress = bool;
    },
  },
  actions: {
    async resetPassword({ commit, dispatch }, { email }) {
      try {
        commit(LOGIN_LOADER, true);
        await firebaseResetPassword(email);
      } catch (e) {
        dispatch(
          'loadMessage',
          {
            type: 'negative',
            message: e.message,
          },
          { root: true },
        );
      } finally {
        commit(LOGIN_LOADER, false);
      }
    },
  },
};

export default resetPasswordStore;
