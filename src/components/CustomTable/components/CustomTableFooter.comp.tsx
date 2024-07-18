import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useCustomTableStore } from '@/components/CustomTable/models/CustomTableState.store';

interface Props {
  handleChangeRowsPerPage: (value: string) => void;
  totalPages: number;
  totalResults: number;
}

export const CustomTableFooter = <
  SORT_BY_COLUMN_NAME_MODEL extends string,
  SEARCH_FORM_MODEL extends object,
  ROW_ITEM_MODEL extends object
>({
  handleChangeRowsPerPage,
  totalPages,
  totalResults,
}: Props) => {
  const useStore = useCustomTableStore<
    SORT_BY_COLUMN_NAME_MODEL,
    SEARCH_FORM_MODEL,
    ROW_ITEM_MODEL
  >();
  const { pageSize, page } = useStore();

  return (
    <div className="flex justify-end mt-4">
      <div className="inline-flex items-center pr-5 mr-5">
        <Select onValueChange={handleChangeRowsPerPage}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={`Rows per page: ${pageSize}`} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="25">25</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="inline-flex items-center pr-5 mr-5">
        {page} {'of'} {totalPages}
      </div>
      <div className="inline-flex items-center">
        {'Total results: '} {totalResults}
      </div>
    </div>
  );
};
