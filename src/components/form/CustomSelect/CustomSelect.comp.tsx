import Select, { SingleValue } from 'react-select';
import { useFormContext } from 'react-hook-form';
import { CustomSelectOption } from '@/components/form/CustomSelect/models/CustomSelectOption.model';

interface Props {
  name: string;
  options: CustomSelectOption<string>[];
  value: CustomSelectOption;
  onChange?: () => void;
}

type SelectedValue = SingleValue<CustomSelectOption<string>>;

export const CustomSelect = ({ name, options, value, onChange }: Props) => {
  const formMethods = useFormContext();

  formMethods.register(name);

  const onCustomSelectChange = (selectedValue: SelectedValue) => {
    formMethods.setValue(name, selectedValue);

    if (typeof onChange === 'function') {
      onChange();
    }
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
