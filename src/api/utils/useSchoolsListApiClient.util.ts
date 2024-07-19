import { SchoolsSearchApiFactory } from '@/api/generated';
import { useMemo } from 'react';
import { useAxiosInstance } from '@/api/useAxiosInstance.util';
import { Configuration } from '@/api/generated/configuration';

interface Return {
  schoolsSearchApi: ReturnType<typeof SchoolsSearchApiFactory>;
}

export const useSchoolsListApiClient = (): Return => {
  const axiosInstance = useAxiosInstance();

  return useMemo(() => {
    return {
      schoolsSearchApi: SchoolsSearchApiFactory(
        new Configuration({
          basePath: 'http://localhost:8888',
          baseOptions: { withCredentials: true },
        }),
        undefined,
        axiosInstance
      ),
    };
  }, [axiosInstance]);
};
