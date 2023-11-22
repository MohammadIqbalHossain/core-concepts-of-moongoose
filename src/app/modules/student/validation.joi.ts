import Joi from 'joi'

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .required()
    .pattern(/^[A-Z][a-z]*$/, 'First name must be capitalize.'),
  middleName: Joi.string(),
  lastName: Joi.string()
    .trim()
    .max(20)
    .required()
    .alphanum()
    .message('{VALUE} is not valid.'),
})

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().max(20).required(),
  fatherOccupation: Joi.string(),
  fatherContactNo: Joi.string().trim().required(),
  motherName: Joi.string().trim().required(),
  motherOccupation: Joi.string(),
  motherContactNo: Joi.string().required(),
})

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().max(20).required(),
  occupation: Joi.string(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
})

const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameValidationSchema.required(),
  dateOfBirth: Joi.string(),
  gender: Joi.string().valid('male', 'female', 'others').required(),
  email: Joi.string().email().required(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string().valid(
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  studentImg: Joi.string(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
})

export default studentValidationSchema
