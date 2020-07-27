import { firebaseRegistration } from '@/services/firebase/registration.services';
import mutations from '../mutation';

const {
  LOGIN_LOADER,
} = mutations;

const registrationStore = {
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
    async registration({ commit, dispatch }, { email, password }) {
      try {
        commit(LOGIN_LOADER, true);
        await firebaseRegistration(email, password);
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

export default registrationStore;
