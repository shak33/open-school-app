import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  CreateSchoolRequestDto,
  CreateSchoolResponseDto,
} from '@/api/generated/models';
import { useSchoolsApiClient } from '@/api/utils/useSchoolsApiClient.util';

type Return = {
  createSchool: (
    req: CreateSchoolRequestDto
  ) => Promise<CreateSchoolResponseDto>;
  isCreateSchoolLoading: boolean;
  isCreateSchoolError: boolean;
};

export const useCreateSchool = (): Return => {
  const { schoolsApiClient } = useSchoolsApiClient();

  const { mutateAsync, isPending, isError } = useMutation<
    CreateSchoolResponseDto,
    AxiosError,
    CreateSchoolRequestDto
  >({
    mutationFn: async (req) => {
      const { data } = await schoolsApiClient.createSchool({
        name: req.name,
        addressLine1: req.addressLine1,
        addressLine2: req.addressLine2,
        city: req.city,
        zip: req.zip,
        active: req.active,
      });

      return data;
    },
  });

  return {
    createSchool: mutateAsync,
    isCreateSchoolLoading: isPending,
    isCreateSchoolError: isError,
  };
};
