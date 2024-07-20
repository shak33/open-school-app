import { SchoolsSearchItemDto } from '@/api/generated';
import { TableHead, TableRow } from '@/components/ui/table';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  row: SchoolsSearchItemDto;
}

export const SchoolsTableRow: React.FC<Props> = (props) => {
  const { row } = props;
  const pathname = usePathname();
  const schoolPageURL = `${pathname}/${row.schoolId}`;

  return (
    <TableRow>
      <TableHead>
        <Link href={schoolPageURL} className="flex items-center">
          {row.name}
        </Link>
      </TableHead>
      <TableHead>{row.country}</TableHead>
      <TableHead>{row.city}</TableHead>
    </TableRow>
  );
};
