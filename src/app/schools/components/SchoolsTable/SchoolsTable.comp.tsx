'use client';

import { CustomTable } from '@/components/CustomTable/CustomTable.comp';
import { SchoolsTableRow } from '@/app/schools/components/SchoolsTable/SchoolsTableRow/SchoolsTableRow.comp';
import { useHandleGetSchoolsListRequest } from '@/app/schools/utils/useHandleGetSchoolsListRequest.util';
import {
  SortBySchoolSearchColumnDto,
  SchoolsSearchItemDto,
} from '@/api/generated';
import { SchoolsSearchFormModel } from '@/app/schools/models/SchoolsSearchForm.model';

export const SchoolsTable = () => {
  const { handleGetSchoolsListRequest, isLoading } =
    useHandleGetSchoolsListRequest();

  const tableHead = [
    {
      id: SortBySchoolSearchColumnDto.Name,
      label: 'Name',
      sortBy: SortBySchoolSearchColumnDto.Name,
    },
    {
      id: SortBySchoolSearchColumnDto.Country,
      label: 'Country',
      sortBy: SortBySchoolSearchColumnDto.Country,
    },
    {
      id: SortBySchoolSearchColumnDto.City,
      label: 'City',
      sortBy: SortBySchoolSearchColumnDto.City,
    },
  ];

  return (
    <CustomTable<
      SortBySchoolSearchColumnDto,
      SchoolsSearchFormModel,
      SchoolsSearchItemDto
    >
      CustomTableRow={SchoolsTableRow}
      tableHead={tableHead}
      isLoading={isLoading}
      getTableDataRequest={handleGetSchoolsListRequest}
      idKey="schoolId"
    />
  );
};
