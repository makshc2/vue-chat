import router from '@/router';

export default function authGuard(store) {
  const publicRoutes = ['Login', 'Registration', 'RestorePassword'];

  router.beforeEach((to, from, next) => {
    if (publicRoutes.includes(to.name) && store.state.auth.isLogin) {
      return next({ name: 'Home' });
    }
    if (!publicRoutes.includes(to.name) && !store.state.auth.isLogin) {
      return next({ name: 'Login' });
    }
    return next();
  });
}
