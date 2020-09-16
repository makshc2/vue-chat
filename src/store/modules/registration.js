import { firebaseRegistration } from '@/services/firebase/registration.services';
import mutations from '../mutation';

const {
  LOGIN_LOADER, IS_FIRST_LOGIN,
} = mutations;

const registrationStore = {
  namespaced: true,
  state: {
    loginInProgress: false,
    isFirstLogin: false,
  },
  getters: {
    loginInProgress: ({ loginInProgress }) => loginInProgress,
    isFirstLogin: ({ isFirstLogin }) => isFirstLogin,
  },
  mutations: {
    [LOGIN_LOADER](state, bool) {
      state.loginInProgress = bool;
    },
    [IS_FIRST_LOGIN](state, bool) {
      state.isFirstLogin = bool;
    },
  },
  actions: {
    async registration({ commit, dispatch }, { email, password }) {
      try {
        commit(LOGIN_LOADER, true);
        const data = await firebaseRegistration(email, password);
        commit(IS_FIRST_LOGIN, data.additionalUserInfo.isNewUser);
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
