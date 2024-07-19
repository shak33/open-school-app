import { useGetSchoolsList } from '@/app/schools/utils/useSearchSchools.util';
import {
  SchoolsSearchResultDataDto,
  SortBySchoolSearchColumnDto,
  SortDirectionDto,
} from '@/api/generated';
import { SchoolsSearchFormModel } from '@/app/schools/models/SchoolsSearchForm.model';

export interface HandleGetSchoolsListRequestProps {
  pageSize?: string;
  page?: string;
  sortBy?: SortBySchoolSearchColumnDto;
  sortOrder?: SortDirectionDto;
  params?: SchoolsSearchFormModel;
}

type Return = {
  isLoading: boolean;
  handleGetSchoolsListRequest: (
    props: HandleGetSchoolsListRequestProps
  ) => Promise<SchoolsSearchResultDataDto>;
};

export const useHandleGetSchoolsListRequest = (): Return => {
  const { getSchoolsList, isGettingSchoolsList } = useGetSchoolsList();

  return {
    isLoading: isGettingSchoolsList,
    handleGetSchoolsListRequest: async (
      props: HandleGetSchoolsListRequestProps
    ) => {
      return await getSchoolsList({
        page: props.page ?? '1',
        pageSize: props.pageSize ?? '10',
        params: {
          name: props.params?.name ?? '',
          country: props.params?.country ?? '',
          city: props.params?.city ?? '',
        },
        sortOrder: props.sortOrder ?? SortDirectionDto.Asc,
        sortBy: props.sortBy ?? SortBySchoolSearchColumnDto.Name,
      });
    },
  };
};
