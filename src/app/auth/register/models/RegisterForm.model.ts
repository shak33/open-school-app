export type RegisterFormModel = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const initialRegisterFormValues: RegisterFormModel = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};
