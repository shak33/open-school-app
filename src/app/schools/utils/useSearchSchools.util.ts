import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  SchoolsSearchResultDataDto,
  FindSchoolsSearchRequestDto,
  SortBySchoolSearchColumnDto,
  SortDirectionDto,
} from '@/api/generated';
import { useSchoolsListApiClient } from '@/api/utils/useSchoolsListApiClient.util';

type Req = {
  pageSize: string;
  page: string;
  sortOrder?: SortDirectionDto;
  params: FindSchoolsSearchRequestDto;
  sortBy?: SortBySchoolSearchColumnDto;
};

type Return = {
  getSchoolsList: (req: Req) => Promise<SchoolsSearchResultDataDto>;
  isGettingSchoolsList: boolean;
  isErrorGettingSchoolsList: boolean;
};

export const useGetSchoolsList = (): Return => {
  const { schoolsSearchApi } = useSchoolsListApiClient();

  const { isError, mutateAsync, isPending } = useMutation<
    SchoolsSearchResultDataDto,
    AxiosError,
    Req
  >({
    meta: { disableSuccessAlert: true },
    mutationFn: async (req) => {
      const { data } = await schoolsSearchApi.getSchoolsSearch(
        req.pageSize,
        req.page,
        req.params,
        req.sortOrder,
        req.sortBy
      );

      return data.data;
    },
  });

  return {
    getSchoolsList: mutateAsync,
    isGettingSchoolsList: isPending,
    isErrorGettingSchoolsList: isError,
  };
};
