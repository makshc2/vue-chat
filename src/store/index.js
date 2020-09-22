import Vue from 'vue';
import Vuex from 'vuex';
import authGuard from '@/guards/auth.guard';
import firebase from '@/plugins/firebase';
import { firebaseGetToken } from '@/services/firebase/getToken';
import auth from './modules/auth';
import registration from './modules/registration';
import resetPassword from './modules/resetPassword';
import notify from './modules/notify';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    registration,
    resetPassword,
    notify,
    user,
  },
});

firebase.auth().onAuthStateChanged(async (userData) => {
  store.dispatch('setIsLoginInState', Boolean(userData));
  if (userData) {
    store.dispatch('setUserState', userData);
    const token = await firebaseGetToken();
    localStorage.setItem(process.env.VUE_APP_LS_TOKEN_KEY, token);
  } else {
    localStorage.removeItem(process.env.VUE_APP_LS_TOKEN_KEY);
  }
});
authGuard(store);
export default store;
