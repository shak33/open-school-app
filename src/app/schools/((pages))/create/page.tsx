import { CreateSchoolForm } from './components/CreateSchoolForm/CreateSchoolForm';
import { ViewWrapper } from '@/components/ViewWrapper/ViewWrapper.comp';

export default function CreateSchoolPage() {
  return (
    <ViewWrapper pageTitle="Create School">
      <CreateSchoolForm />
    </ViewWrapper>
  );
}
