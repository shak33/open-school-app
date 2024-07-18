import { create } from 'zustand';
import {
  CustomTableStateModel,
  CustomTableStateDataModel,
} from '@/components/CustomTable/models/CustomTableState.model';
import { SortDirectionDto } from '@/api/generated';

type CustomTableStore<
  SORT_BY_COLUMN_NAME_MODEL extends string,
  SEARCH_FORM_MODEL extends object,
  ROW_ITEM_MODEL extends object
> = CustomTableStateModel<
  SORT_BY_COLUMN_NAME_MODEL,
  SEARCH_FORM_MODEL,
  ROW_ITEM_MODEL
> & {
  setPageSize: (pageSize: number) => void;
  setPage: (page: number) => void;
  setSortBy: (sortBy: SORT_BY_COLUMN_NAME_MODEL) => void;
  setSortOrder: (sortOrder: SortDirectionDto) => void;
  setParams: (params: SEARCH_FORM_MODEL) => void;
  setData: (data: CustomTableStateDataModel<ROW_ITEM_MODEL>) => void;
};

export const useCustomTableStore = <
  SORT_BY_COLUMN_NAME_MODEL extends string,
  SEARCH_FORM_MODEL extends object,
  ROW_ITEM_MODEL extends object
>() =>
  create<
    CustomTableStore<
      SORT_BY_COLUMN_NAME_MODEL,
      SEARCH_FORM_MODEL,
      ROW_ITEM_MODEL
    >
  >((set) => ({
    pageSize: 10,
    page: 1,
    sortBy: '' as SORT_BY_COLUMN_NAME_MODEL,
    sortOrder: SortDirectionDto.Asc,
    params: {} as SEARCH_FORM_MODEL,
    data: {
      message: '',
      success: false,
      data: {
        totalPages: 0,
        totalResults: 0,
        items: [],
      },
    },

    setPageSize: (pageSize) => set((state) => ({ ...state, pageSize })),
    setPage: (page) => set((state) => ({ ...state, page })),
    setSortBy: (sortBy) => set((state) => ({ ...state, sortBy })),
    setSortOrder: (sortOrder) => set((state) => ({ ...state, sortOrder })),
    setParams: (params) => set((state) => ({ ...state, params })),
    setData: (data) => set((state) => ({ ...state, data })),
  }));
