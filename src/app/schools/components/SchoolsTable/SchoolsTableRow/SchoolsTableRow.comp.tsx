import { SchoolsSearchItemDto } from '@/api/generated';
import { TableHead, TableRow } from '@/components/ui/table';

interface Props {
  row: SchoolsSearchItemDto;
}

export const SchoolsTableRow: React.FC<Props> = (props) => {
  const { row } = props;

  return (
    <TableRow>
      <TableHead>{row.name}</TableHead>
      <TableHead>{row.country}</TableHead>
      <TableHead>{row.city}</TableHead>
    </TableRow>
  );
};
