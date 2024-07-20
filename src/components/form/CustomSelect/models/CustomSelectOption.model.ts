export type CustomSelectOption<
  Value extends string | number | boolean = string
> = {
  value: Value;
  label: React.ReactNode;
};
