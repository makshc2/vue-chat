import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue'),
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/registration/Registration.vue'),
  },
  {
    path: '/restore',
    name: 'RestorePassword',
    component: () => import('../views/restorePassword/RestorePassword.vue'),
  },
  {
    path: '/first-login',
    name: 'FirstLoginSettings',
    component: () => import('../views/firstLoginSettings/FirstLoginSettings.vue'),
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: () => import('../views/userProfile/UserProfile.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

export default router;
