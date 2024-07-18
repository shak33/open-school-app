import { useEffect } from 'react';
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
  page: number;
  pageSize: number;
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

  useEffect(() => {
    const fetchData = async () => {
      const tableData = await getTableDataRequest({
        page,
        pageSize,
        sortBy: sortBy as SORT_BY_COLUMN_NAME_MODEL,
        sortOrder,
        params: params as SEARCH_FORM_MODEL,
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
    <Table>
      <TableHeader>
        <TableRow>
          {tableHead.map(({ label, id }) => (
            <TableHead className="w-[100px]" key={id}>
              {label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.data?.items.map((row) => (
          <CustomTableRow key={row[idKey] as string} row={row} />
        ))}
      </TableBody>
    </Table>
  );
};
