import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/quasar/config';
import './plugins/firebase/config';
import './plugins/vee-validate/config';

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
