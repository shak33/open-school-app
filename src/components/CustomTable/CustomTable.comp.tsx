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
import { CustomTableFooter } from '@/components/CustomTable/components/CustomTableFooter.comp';

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
  page: string;
  pageSize: string;
  sortBy?: SORT_BY_COLUMN_NAME_MODEL;
  sortOrder?: SortDirectionDto;
  params: PARAMS;
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
  const useStore = useCustomTableStore<
    SORT_BY_COLUMN_NAME_MODEL,
    SEARCH_FORM_MODEL,
    ROW_ITEM_MODEL
  >();
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
  } = useStore();

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
      const tableData = await getTableDataRequest({
        page,
        pageSize,
        sortBy,
        sortOrder: resolvedSortOrder,
        params,
      });

      setData(tableData);
      setSortBy(sortBy);
      setSortOrder(resolvedSortOrder);
    },
    [page, pageSize, sortBy, sortOrder, params, getTableDataRequest]
  );

  const handleChangeRowsPerPage = useCallback(
    (pageSize: string) => async () => {
      const tableData = await getTableDataRequest({
        page,
        pageSize,
        sortBy,
        sortOrder,
        params,
      });

      setData(tableData);
      setPageSize(pageSize);
    },
    [page, sortBy, sortOrder, params, getTableDataRequest]
  );

  useEffect(() => {
    const fetchData = async () => {
      const tableData = await getTableDataRequest({
        page,
        pageSize,
        sortBy,
        sortOrder,
        params,
      });

      setData(tableData);
    };

    fetchData();
  }, []);

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
          <TableRow>
            {tableHead.map(({ label, id, sortBy }) =>
              sortBy ? (
                <TableHead
                  className="w-[100px]"
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
          {data?.data?.items.map((row) => (
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
        totalPages={data?.data?.totalPages}
        totalResults={data?.data?.totalResults}
      />
    </>
  );
};
