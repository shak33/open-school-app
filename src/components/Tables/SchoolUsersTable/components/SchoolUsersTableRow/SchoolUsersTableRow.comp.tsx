import { SchoolUsersSearchItemDto } from '@/api/generated';
import { TableHead, TableRow } from '@/components/ui/table';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  row: SchoolUsersSearchItemDto;
}

export const SchoolUsersTableRow: React.FC<Props> = (props) => {
  const { row } = props;
  const pathname = usePathname();
  const teacherPageURL = `${pathname}/${row.schoolId}/users/${row.userId}`;

  return (
    <TableRow>
      <TableHead>
        <Link href={teacherPageURL} className="flex items-center">
          {row.firstName}
        </Link>
      </TableHead>
      <TableHead>{row.lastName}</TableHead>
      <TableHead>{row.email}</TableHead>
    </TableRow>
  );
};
