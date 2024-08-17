'use client';

import { CustomTable } from '@/components/CustomTable/CustomTable.comp';
import { SchoolUsersTableRow } from '@/components/Tables/SchoolUsersTable/components/SchoolUsersTableRow/SchoolUsersTableRow.comp';
import { useHandleGetSchoolUsersListRequest } from '@/components/Tables/SchoolUsersTable/utils/useHandleGetSchoolUsersListRequest.util';
import {
  SortBySchoolUsersSearchColumnDto,
  SchoolUsersSearchItemDto,
  UserRoleDto,
} from '@/api/generated';
import { SchoolUsersSearchFormModel } from '@/components/Tables/SchoolUsersTable/models/SchoolUsersSearchForm.model';
import { useParams } from 'next/navigation';

interface Props {
  role?: UserRoleDto;
}

export const SchoolUsersTable = ({ role }: Props) => {
  const params = useParams();
  const { handleGetSchoolUsersListRequest, isLoading } =
    useHandleGetSchoolUsersListRequest(params.schoolId);

  console.log(params);

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
