import * as z from 'zod';

export const registerFormValidation = z.object({
  email: z
    .string()
    .min(3, {
      message: 'Email must be at least 3 characters long',
    })
    .max(255, {
      message: 'Email must be at most 255 characters long',
    }),
  password: z
    .string()
    .min(8, {
      message: 'Password must be at least 8 characters long',
    })
    .max(16, {
      message: 'Password must be at most 16 characters long',
    }),
  firstName: z
    .string()
    .min(3, {
      message: 'First name must be at least 3 characters long',
    })
    .max(50, {
      message: 'First name must be at most 50 characters long',
    }),
  lastName: z
    .string()
    .min(3, {
      message: 'Last name must be at least 3 characters long',
    })
    .max(50, {
      message: 'Last name must be at most 50 characters long',
    }),
});
