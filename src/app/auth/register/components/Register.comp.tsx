'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  initialRegisterFormValues,
  RegisterFormModel,
} from '@/app/auth/register/models/RegisterForm.model';
import { registerFormValidation } from '@/app/auth/register/utils/registerForm.validation';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRegister } from '@/app/auth/register/utils/useRegister.util';
import Cookies from 'js-cookie';
import { useGetCurrentUserStore } from '@/models/CurrentUser.model';
import { useRouter } from 'next/navigation';

export const Register = () => {
  const router = useRouter();
  const { register } = useRegister();
  const formMethods = useForm<RegisterFormModel>({
    defaultValues: initialRegisterFormValues,
    resolver: zodResolver(registerFormValidation),
  });
  const { currentUser, setCurrentUser } = useGetCurrentUserStore();

  const handleSubmit: SubmitHandler<RegisterFormModel> = async (form) => {
    const data = await register(form);

    Cookies.set('token', data.token);
    setCurrentUser(data.user);
  };

  if (currentUser) {
    router.push('/');
  }

  return (
    <Form {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
        <div className="flex flex-col space-y-4 m-auto max-w-[350px]">
          <FormField
            control={formMethods.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your login email address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formMethods.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formMethods.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formMethods.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Register
          </button>
        </div>
      </form>
    </Form>
  );
};
