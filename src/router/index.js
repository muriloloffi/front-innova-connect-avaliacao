import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore, useAlertStore } from '@/stores';
import { Home } from '@/templates';
import authRoutes from './auth.routes';
import usersRoutes from './users.routes';
import { apiSignInRoute, apiSignUpRoute } from '@/utils/constants';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { ...authRoutes },
    { ...usersRoutes },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
});

router.beforeEach( async (to) => {
  const alertStore = useAlertStore();
  alertStore.clear();

  const publicPages = [apiSignInRoute, apiSignUpRoute];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  if (authRequired && !authStore.user) {
    authStore.returnUrl = to.fullPath;
    return apiSignInRoute;
  }
});
