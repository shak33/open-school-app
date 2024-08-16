import { CustomSelectOption } from '@/components/form/CustomSelect/models/CustomSelectOption.model';

export type CreateSchoolFormModel = {
  name: string;
  country: CustomSelectOption;
  city: string;
  addressLine1: string;
  addressLine2?: string;
  zip: string;
  active: boolean;
};

export const initialCreateSchoolFormValues: CreateSchoolFormModel = {
  name: '',
  country: { value: '', label: '' },
  city: '',
  addressLine1: '',
  addressLine2: '',
  zip: '',
  active: false,
};
