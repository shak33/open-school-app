export type CreateSchoolFormModel = {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  zip: string;
  active: boolean;
};

export const initialCreateSchoolFormValues: CreateSchoolFormModel = {
  name: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  zip: '',
  active: false,
};
