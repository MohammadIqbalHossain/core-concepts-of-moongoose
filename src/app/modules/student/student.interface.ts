//Creating a interface for student .
import { model } from 'mongoose'
const myname = model('')

type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export type Student = {
  id: string
  name: {
    firstName: string
    middleName: string
    lastName: string
  }
  gender: 'male' | 'female'
  email: string
  avatar?: string
  contactNo: string
  emergencyContactNo: string
  BloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string
  guardian: Guardian
}
