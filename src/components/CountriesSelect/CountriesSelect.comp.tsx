import { CustomSelect } from '@/components/form/CustomSelect/CustomSelect.comp';
import Image from 'next/image';
import { CustomSelectOption } from '@/components/form/CustomSelect/models/CustomSelectOption.model';

interface Props {
  name: string;
  value: CustomSelectOption<string>;
}

export const CountriesSelect = ({ name, value }: Props) => {
  const countriesList: CustomSelectOption<string>[] = [
    {
      value: 'us',
      label: (
        <div className="flex items-center">
          <Image
            src="https://flagcdn.com/w20/us.png"
            width={20}
            height={20}
            alt="United States flag"
            className="mr-2"
          />
          {'United States'}
        </div>
      ),
    },
    {
      value: 'pl',
      label: (
        <div className="flex items-center">
          <Image
            src="https://flagcdn.com/w20/pl.png"
            width={20}
            height={20}
            alt="Poland flag"
            className="mr-2"
          />
          {'Poland'}
        </div>
      ),
    },
  ];

  return <CustomSelect options={countriesList} name={name} value={value} />;
};
