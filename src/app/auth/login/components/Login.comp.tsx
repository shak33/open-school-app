'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  initialLoginFormValues,
  LoginFormModel,
} from '@/app/auth/login/models/LoginForm.model';
import { loginFormValidation } from '@/app/auth/login/utils/loginForm.validation';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export const Login = () => {
  const formMethods = useForm<LoginFormModel>({
    defaultValues: initialLoginFormValues,
    resolver: zodResolver(loginFormValidation),
  });

  const handleSubmit: SubmitHandler<LoginFormModel> = async (form) => {
    console.log(form);
  };

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
                  <Input placeholder="Enter your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Login
          </button>
        </div>
      </form>
    </Form>
  );
};
