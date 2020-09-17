import axios from '@/plugins/axios';
import mutations from '../mutation';

const { USER } = mutations;

const userStore = {
  namespaced: true,
  state: {
    user: null,
  },
  getters: {
    user: ({ user }) => user,
  },
  mutations: {
    [USER](state, obj) {
      state.user = obj;
    },
  },
  actions: {
    setUserState: {
      handler({ dispatch }, user) {
        dispatch('getUser', user.email, user);
      },
      root: true,
    },
    async getUser({ commit }, email, user) {
      try {
        await axios.get(`/users/${email}`);
        commit(USER, user);
      } catch (err) {
        console.log(err);
      }
    },
    async createUserInfo(context, data) {
      try {
        await axios.post('/users', data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default userStore;
