'use client';

import { ViewWrapper } from '@/components/ViewWrapper/ViewWrapper.comp';
import { Button } from '@/components/ui/button';
import { CiCirclePlus } from 'react-icons/ci';
import Link from 'next/link';

export default function SchoolsListPage() {
  return (
    <ViewWrapper pageTitle="Schools list">
      <div className="flex justify-end">
        <Link href="/schools/create">
          <Button>
            <CiCirclePlus className="mr-3" />
            Create school
          </Button>
        </Link>
      </div>
      {'schools list'}
    </ViewWrapper>
  );
}
