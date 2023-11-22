import { z } from 'zod'

const userNameSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20)
    .refine(
      (value) =>
        value === value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
      {
        message: 'First name must be capitalized.',
      },
    ),
  middleName: z.string(),
  lastName: z
    .string()
    .trim()
    .max(20)
    .refine((value) => /^[a-zA-Z]+$/.test(value), {
      message: 'Last name must contain only letters.',
    }),
})

const guardianSchema = z.object({
  fatherName: z.string().trim().max(20),
  fatherOccupation: z.string(),
  fatherContactNo: z.string().trim(),
  motherName: z.string().trim(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
})

const localGuardianSchema = z.object({
  name: z.string().max(20),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
})

const studentSchema = z.object({
  id: z.string(),
  password: z.string().max(20, 'Password cannot be longer than 20 charecter'),
  name: userNameSchema,
  dateOfBirth: z.string(),
  gender: z
    .enum(['male', 'female', 'others'])
    .refine((value) => ['male', 'female', 'others'].includes(value), {
      message: 'Invalid gender. Must be "male", "female", or "others".',
    }),
  email: z.string().email(),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .refine(
      (value) =>
        ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].includes(value),
      {
        message:
          'Invalid blood group. Must be "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", or "O-".',
      },
    ),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  studentImg: z.string(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean().default(false),
})

export const StudentZodSchema = studentSchema
