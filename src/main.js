import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/quasar/config';
import './plugins/firebase/config';
import './plugins/vee-validate/config';
import authGuard from './guards/auth.guard';

Vue.config.productionTip = false;
authGuard();
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
