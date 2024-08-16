import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { SchoolDto } from '@/api/generated';
import { useSchoolsApiClient } from '@/api/utils/useSchoolsApiClient.util';
import { QueryKeyEnum } from '@/api/models/QueryKey.enum';

type Return = {
  school: SchoolDto | undefined;
  isSchoolLoading: boolean;
  isErrorGettingSchool: boolean;
};

export const useGetSchoolData = (schoolId: string): Return => {
  const { schoolsApiClient } = useSchoolsApiClient();

  const { data, isError, isLoading } = useQuery<SchoolDto, AxiosError>({
    queryKey: [QueryKeyEnum.SCHOOL_PROFILE, schoolId],
    queryFn: async () => {
      if (!schoolId) {
        console.log('No schoolId provided');
      }

      const { data } = await schoolsApiClient.getSchool(schoolId);
      return data.data;
    },
  });

  return {
    school: data,
    isSchoolLoading: isLoading,
    isErrorGettingSchool: isError,
  };
};
