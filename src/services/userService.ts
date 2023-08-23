import { useHttp } from '@/composables/http';
import { API_USERS } from '@/constants/apiConstant';
import { useAuthStore } from '@/stores/authStore';
import type { User } from '@/types/userType';

export const useUserService = () => {
  const http = useHttp();
  const authStore = useAuthStore();

  const listUsers = async () => {
    const responses = await http.httpAuth(API_USERS);
    const dataJson = await responses.json();

    const users: User[] = [];

    if (responses.status === 401) {
      authStore.cleanAuthUser();
      return;
    }

    if (!responses.ok) throw Error(dataJson.message);

    dataJson.forEach((user: any) => {
      users.push(<User>{
        userId: user.user_id,
        username: user.username,
        avatar: user.avatar,
      });
    });

    return users;
  };

  return { listUsers };
};
