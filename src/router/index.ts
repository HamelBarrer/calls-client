import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      name: 'app',
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

export default router;
