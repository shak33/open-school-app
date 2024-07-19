import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useCustomTableStore } from '@/components/CustomTable/models/CustomTableState.store';
import { Button } from '@/components/ui/button';
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowRight,
} from 'react-icons/md';

interface Props {
  handleChangeRowsPerPage: (value: string) => void;
  totalPages: string;
  totalResults: string;
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
  const { pageSize, page, setPage } = useCustomTableStore();
  // const useStore = useCustomTableStore<
  //   SORT_BY_COLUMN_NAME_MODEL,
  //   SEARCH_FORM_MODEL,
  //   ROW_ITEM_MODEL
  // >();
  // const { pageSize, page } = useStore();

  const goToFirstPage = () => {
    setPage('1');
  };

  const goToPreviousPage = () => {
    const newPage = parseInt(page) - 1;
    setPage(newPage.toString());
  };

  const goToNextPage = () => {
    const newPage = parseInt(page) + 1;
    setPage(newPage.toString());
  };

  const goToLastPage = () => {
    setPage(totalPages);
  };

  return (
    <div className="flex justify-between mt-10">
      <div className="inline-flex items-center">
        {'Total results: '} {totalResults}
      </div>
      <div className="inline-flex">
        <div className="inline-flex items-center mr-10">
          <div className="mr-3">{'Rows per page: '}</div>
          <Select onValueChange={handleChangeRowsPerPage} value={pageSize}>
            <SelectTrigger className="w-[75px]">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="inline-flex items-center">
          <Button
            variant="link"
            disabled={page === '1'}
            onClick={goToFirstPage}
          >
            <MdOutlineKeyboardDoubleArrowLeft size="18" />
          </Button>
          <Button
            variant="link"
            disabled={page === '1'}
            onClick={goToPreviousPage}
          >
            <MdOutlineKeyboardArrowLeft size="18" />
          </Button>
          <div className="inline-flex items-center mx-3">
            {page} {'of'} {totalPages}
          </div>
          <Button
            variant="link"
            disabled={page === totalPages}
            onClick={goToNextPage}
          >
            <MdOutlineKeyboardArrowRight size="18" />
          </Button>
          <Button
            variant="link"
            disabled={page === totalPages}
            onClick={goToLastPage}
          >
            <MdOutlineKeyboardDoubleArrowRight size="18" />
          </Button>
        </div>
      </div>
    </div>
  );
};
