import { z } from 'zod'

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be a string.',
    })
    .max(20, 'Password cannot be longer than 20 charecters.')
    .min(6, 'Passwrod needs to be longer than 6 charecters.')
    .trim()
    .optional(),
})

export const userValidation = {
  userValidationSchema,
}
