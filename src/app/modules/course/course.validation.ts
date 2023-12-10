import { z } from 'zod'

const createPreRequisiteValidationSchema = z.object({
  course: z.string(),
  isDeleted: z.boolean().optional(),
})

const createCourseValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    prefix: z.string(),
    code: z.number(),
    credits: z.number(),
    isDeleted: z.boolean().optional(),
    preRequisiteCourse: z.array(createPreRequisiteValidationSchema).optional(),
  }),
})

const updatePreRequisiteValidationSchema = z.object({
  course: z.string(),
  isDeleted: z.boolean().optional(),
})

const updateCourseValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    prefix: z.string().optional(),
    code: z.number().optional(),
    credits: z.number().optional(),
    isDeleted: z.boolean().optional(),
    preRequisiteCourse: z.array(updatePreRequisiteValidationSchema).optional(),
  }),
})

const facultieswithCourseValidationSchema = z.object({
  body: z.object({
    course: z.string(),
    faculties: z.array(z.string()),
  }),
})

export const courseValidationSchemas = {
  createCourseValidationSchema,
  updateCourseValidationSchema,
  facultieswithCourseValidationSchema,
}
