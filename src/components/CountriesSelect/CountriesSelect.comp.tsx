import { CustomSelect } from '@/components/form/CustomSelect/CustomSelect.comp';
import Image from 'next/image';
import { CustomSelectOption } from '@/components/form/CustomSelect/models/CustomSelectOption.model';
import CountryList from 'country-list-with-dial-code-and-flag';

interface Props {
  name: string;
  value: CustomSelectOption<string>;
}

export const CountriesSelect = ({ name, value }: Props) => {
  const countriesList: CustomSelectOption<string>[] = CountryList.getAll().map(
    (country) => ({
      value: country.code,
      label: (
        <div className="flex items-center">
          <Image
            src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
            width={20}
            height={20}
            alt={`${country.name} flag`}
            className="mr-2"
          />
          {country.name}
        </div>
      ),
    })
  );

  return <CustomSelect options={countriesList} name={name} value={value} />;
};