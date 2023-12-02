import { z } from 'zod'

const createAcademicDeparmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be a string.',
      required_error: 'Name is required!',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Faculy reference is a string!',
      required_error: 'Faculty reference is required!',
    }),
  }),
})

const updateAcademicDeparmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Name must be a string.',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'Faculy reference is a string!',
      })
      .optional(),
  }),
})

export const academicDeparmentValidation = {
  createAcademicDeparmentValidationSchema,
  updateAcademicDeparmentValidationSchema,
}
