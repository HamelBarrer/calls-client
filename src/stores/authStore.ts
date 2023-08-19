import type { AuthenticatedUser } from '@/types/authType';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const authenticatedUser = ref<AuthenticatedUser>({
    userId: 0,
    username: '',
    avatar: '',
    token: '',
  });

  const registerAuthUser = (data: AuthenticatedUser) => {
    authenticatedUser.value.userId = data.userId;
    authenticatedUser.value.username = data.username;
    authenticatedUser.value.avatar = data.avatar;
    authenticatedUser.value.token = data.token;

    localStorage.setItem('auth', JSON.stringify(authenticatedUser.value));
  };

  const getAuthUser = () => {
    const storage = localStorage.getItem('auth');
    if (storage) {
      const auth = JSON.parse(storage) as AuthenticatedUser;

      authenticatedUser.value.userId = auth.userId;
      authenticatedUser.value.username = auth.username;
      authenticatedUser.value.avatar = auth.avatar;
      authenticatedUser.value.token = auth.token;
    }
  };

  return { authenticatedUser, registerAuthUser, getAuthUser };
});
