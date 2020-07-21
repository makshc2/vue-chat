import { firebaseLogin, firebaseLogOut } from '@/services/firebase/auth.services';
import mutations from '../mutation';

const {
  IS_LOGIN, LOGIN_LOADER,
} = mutations;

const authStore = {
  namespaced: true,
  state: {
    isLogin: false,
    loginInProgress: false,
  },
  getters: {
    isLogin: ({ isLogin }) => isLogin,
    loginInProgress: ({ loginInProgress }) => loginInProgress,
  },
  mutations: {
    [IS_LOGIN](state, bool) {
      state.isLogin = bool;
    },
    [LOGIN_LOADER](state, bool) {
      state.loginInProgress = bool;
    },
  },
  actions: {
    setIsLoginInState: {
      handler({ commit }, bool) {
        commit(IS_LOGIN, bool);
      },
      root: true,
    },
    async login({ commit, dispatch }, { email, password }) {
      try {
        commit(LOGIN_LOADER, true);
        await firebaseLogin(email, password);
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
    async logOut() {
      try {
        await firebaseLogOut();
      } catch (e) {
        console.log(e);
      }
    },
  },
};

export default authStore;
