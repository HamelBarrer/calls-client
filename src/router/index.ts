import { useAuthStore } from '@/stores/authStore';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/IndexView.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('../views/auth/LoginView.vue'),
        },
      ],
    },
    {
      path: '/app',
      name: 'app',
      meta: {
        required: true,
      },
      component: () => import('../views/app/LayoutAppView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/app/HomeView.vue'),
        },
      ],
    },
  ],
});

router.beforeEach((to, from) => {
  const authStore = useAuthStore();
  const isPublic = to.matched.some((record) => record.meta.required);

  if (isPublic && authStore.authenticatedUser.userId === 0) {
    return { name: 'login' };
  }

  if (authStore.authenticatedUser.userId !== 0 && to.name === 'login') {
    return { name: 'home' };
  }
});

export default router;
