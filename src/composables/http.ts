import { useAuthStore } from '@/stores/authStore';

export const useHttp = () => {
  const authStore = useAuthStore();

  const httpBasic = async (
    url: string,
    method: string = 'GET',
    data: object = {},
  ) => {
    const opts =
      Object.entries(data).length === 0
        ? {
            method,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        : {
            method,
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          };

    return fetch(url, opts);
  };

  const httpAuth = async (
    url: string,
    method: string = 'GET',
    data: object = {},
  ) => {
    const opts =
      Object.entries(data).length === 0
        ? {
            method,
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authStore.authenticatedUser.token}`,
            },
          }
        : {
            method,
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authStore.authenticatedUser.token}`,
            },
            body: JSON.stringify(data),
          };

    return fetch(url, opts);
  };

  return { httpBasic, httpAuth };
};
