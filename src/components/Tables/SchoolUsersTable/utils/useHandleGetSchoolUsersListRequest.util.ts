import { useGetSchoolUsersList } from '@/components/Tables/SchoolUsersTable/utils/useSearchSchoolUsers.util';
import {
  SchoolUsersSearchResultDataDto,
  SortBySchoolUsersSearchColumnDto,
  SortDirectionDto,
} from '@/api/generated';
import { SchoolUsersSearchFormModel } from '@/components/Tables/SchoolUsersTable/models/SchoolUsersSearchForm.model';

export interface HandleGetSchoolsListRequestProps {
  pageSize?: string;
  page?: string;
  sortBy?: SortBySchoolUsersSearchColumnDto;
  sortOrder?: SortDirectionDto;
  params?: SchoolUsersSearchFormModel;
}

interface Props {
  schoolId: string;
}

type Return = {
  isLoading: boolean;
  handleGetSchoolUsersListRequest: (
    props: HandleGetSchoolsListRequestProps
  ) => Promise<SchoolUsersSearchResultDataDto>;
};

export const useHandleGetSchoolUsersListRequest = ({
  schoolId,
  role,
}: Props): Return => {
  const { getSchoolUsersList, isGettingSchoolUsersList } =
    useGetSchoolUsersList();

  return {
    isLoading: isGettingSchoolUsersList,
    handleGetSchoolUsersListRequest: async (
      props: HandleGetSchoolsListRequestProps
    ) => {
      return await getSchoolUsersList({
        page: props.page ?? '1',
        pageSize: props.pageSize ?? '10',
        params: {
          firstName: props.params?.firstName ?? '',
          lastName: props.params?.lastName ?? '',
          email: props.params?.email ?? '',
          schoolId,
          role,
        },
        sortOrder: props.sortOrder ?? SortDirectionDto.Asc,
        sortBy: props.sortBy ?? SortBySchoolUsersSearchColumnDto.LastName,
      });
    },
  };
};
