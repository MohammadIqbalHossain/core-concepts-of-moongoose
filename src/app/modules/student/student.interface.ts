//Creating a interface for student . Have to import import { Schema, model, connect } from 'mongoose';

import { Model, Types } from 'mongoose'

export type TGuardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export type TUserName = {
  firstName: string
  middleName: string
  lastName: string
}

export type TLocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

export type TStudent = {
  id: string
  user: Types.ObjectId
  password: string
  name: TUserName
  dateOfBirth?: Date
  gender: 'male' | 'female' | 'others'
  email: string
  contactNo: string
  emergencyContactNo: string
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string
  guardian: TGuardian
  localGuardian: TLocalGuardian
  studentImg?: string
  isDeleted: boolean
}

export interface studentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>
}

// export type studentMethods = {
//   isUserExists(id: string): Promise<TStudent | null>
// }

// export type studentModel = Model<
//   TStudent,
//   Record<string, never>,
//   studentMethods
// >
