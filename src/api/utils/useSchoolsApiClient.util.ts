import { SchoolsApiFactory } from '@/api/generated';
import { useMemo } from 'react';
import { useAxiosInstance } from '@/api/useAxiosInstance.util';
import { Configuration } from '@/api/generated/configuration';

interface Return {
  schoolsApiClient: ReturnType<typeof SchoolsApiFactory>;
}

export const useSchoolsApiClient = (): Return => {
  const axiosInstance = useAxiosInstance();

  const schoolsApiClient = useMemo(() => {
    return SchoolsApiFactory(
      new Configuration({
        basePath: 'http://localhost:8888',
        baseOptions: { withCredentials: true },
      }),
      undefined,
      axiosInstance
    );
  }, [axiosInstance]);

  return { schoolsApiClient };
};
