'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CreateSchoolFormModel,
  initialCreateSchoolFormValues,
} from '@/app/schools/((pages))/create/models/CreateSchoolForm.model';
import { createSchoolFormValidation } from '@/app/schools/((pages))/create/utils/createSchoolForm.validation';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCreateSchool } from '@/app/schools/((pages))/create/utils/useCreateSchool.util';
import { useRouter } from 'next/navigation';
import { CountriesSelect } from '@/components/CountriesSelect/CountriesSelect.comp';

export const CreateSchoolForm: React.FC = () => {
  const { createSchool } = useCreateSchool();
  const router = useRouter();
  const formMethods = useForm<CreateSchoolFormModel>({
    defaultValues: initialCreateSchoolFormValues,
    resolver: zodResolver(createSchoolFormValidation),
  });

  const handleSubmit: SubmitHandler<CreateSchoolFormModel> = async (form) => {
    await createSchool(form);
    router.push('/schools');
  };

  return (
    <Form {...formMethods}>
      <form
        className="flex flex-col space-y-4"
        onSubmit={formMethods.handleSubmit(handleSubmit)}
      >
        <FormField
          control={formMethods.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Enter school name" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formMethods.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <CountriesSelect name="country" value={field.value} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formMethods.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <Input placeholder="Enter school city" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formMethods.control}
          name="zip"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zip code</FormLabel>
              <Input placeholder="Enter school zip code" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formMethods.control}
          name="addressLine1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address line #1</FormLabel>
              <Input placeholder="Enter school address" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formMethods.control}
          name="addressLine2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address line #2</FormLabel>
              <Input placeholder="Enter school address" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded-md"
        >
          Create School
        </button>
      </form>
    </Form>
  );
};
