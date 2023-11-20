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
  id: { type: String },
  name: userNameSchema,

  dateOfBirth: { type: String },
  gender: ['male', 'female'],
  email: { type: String, required: true },
  contactNo: { type: String },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,

  localGuardian: localGuardianSchema,

  studentImg: { type: String },
})

//Create a model.
export const StudentModel = model<Student>('Student', studentSchema)
