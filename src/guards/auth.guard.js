import router from '@/router';

export default function authGuard() {
  const isAuth = false;
  const publicRoutes = ['Login'];
  router.beforeEach((to, from, next) => {
    if (publicRoutes.includes(to.name) && isAuth) {
      return next({ name: 'Home' });
    }
    if (!publicRoutes.includes(to.name) && !isAuth) {
      return next({ name: 'Login' });
    }
    return next();
  });
}
