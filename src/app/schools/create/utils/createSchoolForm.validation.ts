import * as z from 'zod';

export const createSchoolFormValidation = z.object({
  name: z
    .string()
    .min(3, {
      message: 'Name must be at least 3 characters long',
    })
    .max(255, {
      message: 'Name must be at most 255 characters long',
    }),
  country: z
    .object({
      value: z.string().min(1, {
        message: 'Country value cannot be empty',
      }),
    })
    .refine((data) => data.value !== '', {
      message: 'Country value cannot be empty',
    }),
  city: z
    .string()
    .min(3, {
      message: 'City must be at least 3 characters long',
    })
    .max(50, {
      message: 'City must be at most 255 characters long',
    }),
  addressLine1: z
    .string()
    .min(3, {
      message: 'Address line 1 must be at least 3 characters long',
    })
    .max(255, {
      message: 'Address line 1 must be at most 255 characters long',
    }),
  addressLine2: z
    .string()
    .max(255, {
      message: 'Address line 2 must be at most 255 characters long',
    })
    .optional(),
  zip: z
    .string()
    .min(3, {
      message: 'Zip must be at least 3 characters long',
    })
    .max(50, {
      message: 'Zip must be at most 255 characters long',
    }),
  active: z.boolean(),
});
