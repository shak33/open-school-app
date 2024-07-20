import Select, { SingleValue } from 'react-select';
import { useFormContext } from 'react-hook-form';
import { CustomSelectOption } from '@/components/form/CustomSelect/models/CustomSelectOption.model';

interface Props {
  name: string;
  options: CustomSelectOption<string>[];
  value: CustomSelectOption;
}

type SelectedValue = SingleValue<CustomSelectOption<string>>;

export const CustomSelect = ({ name, options, value }: Props) => {
  const formMethods = useFormContext();

  formMethods.register(name);

  const onCustomSelectChange = (selectedValue: SelectedValue) => {
    formMethods.setValue(name, selectedValue);
  };

  return (
    <Select
      name={name}
      options={options}
      value={options.find((option) => option.value === value.value)}
      onChange={onCustomSelectChange}
    />
  );
};
