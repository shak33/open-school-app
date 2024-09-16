'use client';

import { useEffect, useCallback } from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CustomTableStateDataModel } from '@/components/CustomTable/models/CustomTableState.model';
import { SortDirectionDto } from '@/api/generated';
import { useCustomTableStore } from '@/components/CustomTable/models/CustomTableState.store';
import { Loader } from '@/components/Loader/Loader.comp';
import { FaSort } from 'react-icons/fa';
import { FaSortUp, FaSortDown } from 'react-icons/fa6';
import { CustomTableFooter } from '@/components/CustomTable/components/CustomTableFooter/CustomTableFooter.comp';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

type CustomTableRowComponent<ROW_ITEM_MODEL extends object> = React.FC<{
  row: ROW_ITEM_MODEL;
}>;

export interface CustomTableColumn<SORT_BY_COLUMN_NAME_MODEL extends string> {
  id: string;
  label: string;
  sortBy?: SORT_BY_COLUMN_NAME_MODEL;
}

interface BasicRequestProps<
  SORT_BY_COLUMN_NAME_MODEL extends string,
  PARAMS extends object
> {
  page?: string;
  pageSize?: string;
  sortBy?: SORT_BY_COLUMN_NAME_MODEL;
  sortOrder?: SortDirectionDto;
  params?: PARAMS;
}

interface Props<
  SORT_BY_COLUMN_NAME_MODEL extends string,
  SEARCH_FORM_MODEL extends object,
  ROW_ITEM_MODEL extends object
> {
  CustomTableRow: CustomTableRowComponent<ROW_ITEM_MODEL>;
  getTableDataRequest: (
    req: BasicRequestProps<SORT_BY_COLUMN_NAME_MODEL, SEARCH_FORM_MODEL>
  ) => Promise<CustomTableStateDataModel<ROW_ITEM_MODEL>>;
  tableHead: CustomTableColumn<SORT_BY_COLUMN_NAME_MODEL>[];
  isLoading: boolean;
  idKey: keyof ROW_ITEM_MODEL;
}

export const CustomTable = <
  SORT_BY_COLUMN_NAME_MODEL extends string,
  SEARCH_FORM_MODEL extends object,
  ROW_ITEM_MODEL extends object
>({
  CustomTableRow,
  tableHead,
  getTableDataRequest,
  isLoading,
  idKey,
}: Props<SORT_BY_COLUMN_NAME_MODEL, SEARCH_FORM_MODEL, ROW_ITEM_MODEL>) => {
  const {
    pageSize,
    page,
    sortBy,
    sortOrder,
    params,
    data,
    setPageSize,
    setPage,
    setSortBy,
    setSortOrder,
    setParams,
    setData,
  } = useCustomTableStore();
  // const useStore = useCustomTableStore<
  //   SORT_BY_COLUMN_NAME_MODEL,
  //   SEARCH_FORM_MODEL,
  //   ROW_ITEM_MODEL
  // >();
  // const {
  //   pageSize,
  //   page,
  //   sortBy,
  //   sortOrder,
  //   params,
  //   data,
  //   setPageSize,
  //   setPage,
  //   setSortBy,
  //   setSortOrder,
  //   setParams,
  //   setData,
  // } = useStore();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const resolveOrder = (sortOrder: SortDirectionDto) => {
    if (sortOrder === SortDirectionDto.Asc) {
      return SortDirectionDto.Desc;
    }

    return SortDirectionDto.Asc;
  };

  const resolveOrderIcon = (
    sortOrder: SortDirectionDto,
    sortByColumn: SORT_BY_COLUMN_NAME_MODEL
  ) => {
    if (sortOrder === SortDirectionDto.Asc && sortBy === sortByColumn) {
      return <FaSortUp />;
    }

    if (sortOrder === SortDirectionDto.Desc && sortBy === sortByColumn) {
      return <FaSortDown />;
    }

    return <FaSort />;
  };

  const handleRequestSort = useCallback(
    (sortBy: SORT_BY_COLUMN_NAME_MODEL) => async () => {
      const resolvedSortOrder = resolveOrder(sortOrder);
      setSortBy(sortBy);
      setSortOrder(resolvedSortOrder);
    },
    [sortOrder, sortBy]
  );

  const handleChangeRowsPerPage = useCallback(
    (pageSize: string) => {
      setPageSize(pageSize);
    },
    [pageSize]
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    params.set('page', page);
    params.set('pageSize', pageSize);
    params.set('sortBy', sortBy);
    params.set('sortOrder', sortOrder);
    params.set('params', JSON.stringify(params));

    replace(`${pathname}?${params.toString()}`);

    const fetchData = async () => {
      const tableData = await getTableDataRequest({
        page,
        pageSize,
        // @ts-ignore: Later fix
        sortBy,
        sortOrder,
        // @ts-ignore: Later fix
        params,
      });

      setData(tableData);
    };

    fetchData();
  }, [page, pageSize, sortBy, sortOrder, params]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Table className="mt-5">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            {tableHead.map(({ label, id, sortBy }) =>
              sortBy ? (
                <TableHead
                  className="w-[100px] cursor-pointer"
                  key={id}
                  onClick={handleRequestSort(sortBy)}
                >
                  <div className="flex items-center justify-between w-full">
                    {label}
                    {resolveOrderIcon(sortOrder, sortBy)}
                  </div>
                </TableHead>
              ) : (
                <TableHead className="w-[100px]" key={id}>
                  {label}
                </TableHead>
              )
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.items.map((row) => (
            // @ts-ignore: Later fix
            <CustomTableRow key={row[idKey] as string} row={row} />
          ))}
        </TableBody>
      </Table>
      <CustomTableFooter<
        SORT_BY_COLUMN_NAME_MODEL,
        SEARCH_FORM_MODEL,
        ROW_ITEM_MODEL
      >
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        totalPages={data?.totalPages.toString()}
        totalResults={data?.totalResults.toString()}
      />
    </>
  );
};
