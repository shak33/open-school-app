import { AuthApiFactory } from '@/api/generated';
import { useMemo } from 'react';
import { useAxiosInstance } from '@/api/useAxiosInstance.util';
import { Configuration } from '@/api/generated/configuration';

interface Return {
  authApiClient: ReturnType<typeof AuthApiFactory>;
}

export const useAuthApiClient = (): Return => {
  const axiosInstance = useAxiosInstance();

  const authApiClient = useMemo(() => {
    return AuthApiFactory(
      new Configuration({
        basePath: 'http://localhost:8888',
        baseOptions: { withCredentials: true },
      }),
      undefined,
      axiosInstance
    );
  }, [axiosInstance]);

  return { authApiClient };
};
