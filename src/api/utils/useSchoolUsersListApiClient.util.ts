import { SchoolUsersSearchApiFactory } from '@/api/generated';
import { useMemo } from 'react';
import { useAxiosInstance } from '@/api/useAxiosInstance.util';
import { Configuration } from '@/api/generated/configuration';

interface Return {
  schoolUsersSearchApi: ReturnType<typeof SchoolUsersSearchApiFactory>;
}

export const useSchoolUsersListApiClient = (): Return => {
  const axiosInstance = useAxiosInstance();

  return useMemo(() => {
    return {
      schoolUsersSearchApi: SchoolUsersSearchApiFactory(
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
