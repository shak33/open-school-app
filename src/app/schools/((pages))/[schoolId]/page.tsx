'use client';
import { ViewWrapper } from '@/components/ViewWrapper/ViewWrapper.comp';
import { useGetSchoolData } from '@/app/schools/((pages))/[schoolId]/utils/useGetSchoolData.util';
import { Loader } from '@/components/Loader/Loader.comp';

type Props = {
  params: {
    schoolId: string;
  };
};

export default function SchoolPage({ params }: Props) {
  const { schoolId } = params;
  const { school, isSchoolLoading } = useGetSchoolData(schoolId);

  if (isSchoolLoading) {
    return <Loader />;
  }

  return (
    <ViewWrapper pageTitle={school?.name}>
      <p>
        Country: <span className="font-bold">{school?.country}</span>
      </p>
      <p>
        City: <span className="font-bold">{school?.city}</span>
      </p>
      <p>
        Address line: <span className="font-bold">{school?.addressLine1}</span>
      </p>
      <p>
        Address line #2:{' '}
        <span className="font-bold">{school?.addressLine2 ?? '-'}</span>
      </p>
      <p>
        Postal code: <span className="font-bold">{school?.zip}</span>
      </p>
    </ViewWrapper>
  );
}
