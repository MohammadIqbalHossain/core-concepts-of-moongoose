import { z } from 'zod'

const createUserNameValidationSchema = z.object({
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

const createGuardianValidationSchema = z.object({
  fatherName: z.string().trim().max(20),
  fatherOccupation: z.string(),
  fatherContactNo: z.string().trim(),
  motherName: z.string().trim(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
})

const createLocalGuardianValidationSchema = z.object({
  name: z.string().max(20),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
})

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z
      .string()
      .max(20, 'Password cannot be longer than 20 characters'),
    student: z.object({
      name: createUserNameValidationSchema,
      dateOfBirth: z.string().optional(),
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
      guardian: createGuardianValidationSchema,
      admissionSemester: z.string(),
      localGuardian: createLocalGuardianValidationSchema,
      studentImg: z.string(),
    }),
  }),
})

const updateUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
})

const updateGuardianValidationSchema = z.object({
  fatherName: z.string().optional(),
  fatherOccupation: z.string().optional(),
  fatherContactNo: z.string().optional(),
  motherName: z.string().optional(),
  motherOccupation: z.string().optional(),
  motherContactNo: z.string().optional(),
})

const updateLocalGuardianValidationSchema = z.object({
  name: z.string().optional(),
  occupation: z.string().optional(),
  contactNo: z.string().optional(),
  address: z.string().optional(),
})

export const updateStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: updateUserNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']).optional(),
      dateOfBirth: z.string().optional(),
      email: z.string().email().optional(),
      contactNo: z.string().optional(),
      emergencyContactNo: z.string().optional(),
      bloogGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      guardian: updateGuardianValidationSchema.optional(),
      localGuardian: updateLocalGuardianValidationSchema.optional(),
      admissionSemester: z.string().optional(),
      profileImg: z.string().optional(),
      academicDepartment: z.string().optional(),
    }),
  }),
})

export const studentValidation = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
}
