import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  SchoolsSearchResultDto,
  FindSchoolsSearchRequestDto,
  SortBySchoolSearchColumnDto,
  SortDirectionDto,
} from '@/api/generated';
import { useSchoolsListApiClient } from '@/api/utils/useSchoolsListApiClient.util';

type Req = {
  pageSize: number;
  page: number;
  sortOrder?: SortDirectionDto;
  params: FindSchoolsSearchRequestDto;
  sortBy?: SortBySchoolSearchColumnDto;
};

type Return = {
  getSchoolsList: (req: Req) => Promise<SchoolsSearchResultDto>;
  isGettingSchoolsList: boolean;
  isErrorGettingSchoolsList: boolean;
};

export const useGetSchoolsList = (): Return => {
  const { schoolsSearchApi } = useSchoolsListApiClient();

  const { isError, mutateAsync, isPending } = useMutation<
    SchoolsSearchResultDto,
    AxiosError,
    Req
  >({
    meta: { disableSuccessAlert: true },
    mutationFn: async req => {
      const { data } = await schoolsSearchApi.getSchoolsSearch(
        req.pageSize,
        req.page,
        req.params,
        req.sortOrder,
        req.sortBy,
      );

      return data;
    },
  });

  return {
    getSchoolsList: mutateAsync,
    isGettingSchoolsList: isPending,
    isErrorGettingSchoolsList: isError,
  };
};
