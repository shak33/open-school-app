import { SortDirectionDto } from '@/api/generated';

export type CustomTableStateDataModel<ROW_ITEM_MODEL extends object> = {
  totalPages: number;
  totalResults: number;
  items: ROW_ITEM_MODEL[];
};

export type CustomTableStateModel<
  SORT_BY_COLUMN_NAME_MODEL extends string,
  SEARCH_FORM_MODEL extends object,
  ROW_ITEM_MODEL extends object
> = {
  pageSize: string;
  page: string;
  sortBy: SORT_BY_COLUMN_NAME_MODEL;
  sortOrder: SortDirectionDto;
  params: SEARCH_FORM_MODEL;
  data: CustomTableStateDataModel<ROW_ITEM_MODEL>;
};
