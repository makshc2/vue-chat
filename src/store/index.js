import Vue from 'vue';
import Vuex from 'vuex';
import authGuard from '@/guards/auth.guard';
import firebase from '@/plugins/firebase';
import router from '@/router';
import auth from './modules/auth';
import registration from './modules/registration';
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
    notify,
    user,
  },
});

firebase.auth().onAuthStateChanged((userData) => {
  store.dispatch('setIsLoginInState', Boolean(userData));
  store.dispatch('setUserState', userData);
  if (userData) router.push({ name: 'Home' });
});
authGuard(store);
export default store;
