import { useHttp } from '@/composables/http';
import { API_AUTH } from '@/constants/apiConstant';
import type { Auth, AuthenticatedUser } from '@/types/authType';

export const useAuthService = () => {
  const http = useHttp();

  const login = async (data: Auth) => {
    const response = await http.httpBasic(API_AUTH, 'POST', data);
    const dataJson = await response.json();

    if (!response.ok) throw Error(dataJson.message);

    return <AuthenticatedUser>{
      userId: dataJson.user_id,
      username: dataJson.username,
      avatar: dataJson.avatar,
      token: dataJson.token,
    };
  };

  return { login };
};
