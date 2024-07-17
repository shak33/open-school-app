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
  city: z
    .string()
    .min(3, {
      message: 'City must be at least 3 characters long',
    })
    .max(50, {
      message: 'City must be at most 255 characters long',
    }),
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
