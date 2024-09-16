'use client';

import { CustomTable } from '@/components/CustomTable/CustomTable.comp';
import { SchoolUsersTableRow } from '@/components/Tables/SchoolUsersTable/components/SchoolUsersTableRow/SchoolUsersTableRow.comp';
import { useHandleGetSchoolUsersListRequest } from '@/components/Tables/SchoolUsersTable/utils/useHandleGetSchoolUsersListRequest.util';
import {
  SortBySchoolUsersSearchColumnDto,
  SchoolUsersSearchItemDto,
  SchoolUserRoleDto,
} from '@/api/generated';
import { SchoolUsersSearchFormModel } from '@/components/Tables/SchoolUsersTable/models/SchoolUsersSearchForm.model';

interface Props {
  role: SchoolUserRoleDto;
  schoolId: string;
}

export const SchoolUsersTable = ({ role, schoolId }: Props) => {
  const { handleGetSchoolUsersListRequest, isLoading } =
    useHandleGetSchoolUsersListRequest({ role, schoolId });

  const tableHead = [
    {
      id: SortBySchoolUsersSearchColumnDto.FirstName,
      label: 'First Name',
      sortBy: SortBySchoolUsersSearchColumnDto.FirstName,
    },
    {
      id: SortBySchoolUsersSearchColumnDto.LastName,
      label: 'Last Name',
      sortBy: SortBySchoolUsersSearchColumnDto.LastName,
    },
    {
      id: SortBySchoolUsersSearchColumnDto.Email,
      label: 'Email',
      sortBy: SortBySchoolUsersSearchColumnDto.Email,
    },
  ];

  return (
    <CustomTable<
      SortBySchoolUsersSearchColumnDto,
      SchoolUsersSearchFormModel,
      SchoolUsersSearchItemDto
    >
      CustomTableRow={SchoolUsersTableRow}
      tableHead={tableHead}
      isLoading={isLoading}
      getTableDataRequest={handleGetSchoolUsersListRequest}
      idKey="userId"
    />
  );
};
