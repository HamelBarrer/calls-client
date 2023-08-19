export const useHttp = () => {
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

    return await fetch(url, opts);
  };

  return { httpBasic };
};
