import { Schema, model } from 'mongoose'
import { Guardian, Student, UserName } from './student/student.interface'

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
})

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
})

const localGuardianSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
})

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: [true, 'User name is required'],
  },

  dateOfBirth: { type: String },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'others'],
      message:
        '{VALUE} is not valid. The value should be "male" or "female" or "others"',
    },
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: {
    type: guardianSchema,
    required: true,
  },

  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Someting went wrong in local guradian data'],
  },

  studentImg: { type: String },

  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message: 'The {VALUE} is not valid. It should be "active" or "blocked"',
    },
    default: 'active',
  },
})

//Create a model.
export const StudentModel = model<Student>('Student', studentSchema)
