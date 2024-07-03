import { MeApiFactory } from '@/api/generated';
import { useMemo } from 'react';
import { useAxiosInstance } from '@/api/useAxiosInstance.util';
import { Configuration } from '@/api/generated/configuration';

interface Return {
  meApiClient: ReturnType<typeof MeApiFactory>;
}

export const useMeApiClient = (): Return => {
  const axiosInstance = useAxiosInstance();

  const meApiClient = useMemo(() => {
    return MeApiFactory(
      new Configuration({
        basePath: 'http://localhost:8888',
        baseOptions: { withCredentials: true },
      }),
      undefined,
      axiosInstance
    );
  }, [axiosInstance]);

  return { meApiClient };
};
