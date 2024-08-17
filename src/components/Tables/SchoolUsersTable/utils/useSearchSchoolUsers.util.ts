import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  SchoolUsersSearchResultDataDto,
  FindSchoolUsersSearchRequestDto,
  SortBySchoolUsersSearchColumnDto,
  SortDirectionDto,
} from '@/api/generated';
import { useSchoolUsersListApiClient } from '@/api/utils/useSchoolUsersListApiClient.util';

type Req = {
  pageSize: string;
  page: string;
  sortOrder?: SortDirectionDto;
  params: FindSchoolUsersSearchRequestDto;
  sortBy?: SortBySchoolUsersSearchColumnDto;
};

type Return = {
  getSchoolUsersList: (req: Req) => Promise<SchoolUsersSearchResultDataDto>;
  isGettingSchoolUsersList: boolean;
  isErrorGettingSchoolUsersList: boolean;
};

export const useGetSchoolUsersList = (): Return => {
  const { schoolUsersSearchApi } = useSchoolUsersListApiClient();

  const { isError, mutateAsync, isPending } = useMutation<
  SchoolUsersSearchResultDataDto,
    AxiosError,
    Req
  >({
    meta: { disableSuccessAlert: true },
    mutationFn: async (req) => {
      const { data } = await schoolUsersSearchApi.getSchoolUsersSearch(
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
    getSchoolUsersList: mutateAsync,
    isGettingSchoolUsersList: isPending,
    isErrorGettingSchoolUsersList: isError,
  };
};
