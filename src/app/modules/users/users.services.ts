import httpStatus from 'http-status'
import mongoose from 'mongoose'
import AppError from '../../Error/AppError'
import config from '../../config'
import { academicSemester } from '../academicSemester/academicSemester.model'
import { TStudent } from '../student/student.interface'
import { Student } from '../student/student.model'
import { generateStudentId } from './user.utils'
import { TUSer } from './users.interface'
import { User } from './users.model'

const createStudentIntoDB = async (password: string, payLoad: TStudent) => {
  const userData: Partial<TUSer> = {}

  //Set a password for user.
  userData.password = password || (config.default_passwrod as string)

  //set a role for password.
  userData.role = 'student'

  const admissionSemester = await academicSemester.findById(
    payLoad.admissionSemester,
  )

  const session = await mongoose.startSession()

  try {
    session.startTransaction()

    //set a generated id.
    userData.id = await generateStudentId(admissionSemester)

    const newUser = await User.create([userData], { session })

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create the user.')
    }
    payLoad.id = newUser[0].id
    payLoad.user = newUser[0]._id

    const newStudent = await Student.create([payLoad], { session })

    if (!newStudent.length) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'Failed to create the student.',
      )
    }

    await session.commitTransaction()
    await session.endSession()

    return newStudent
  } catch (err) {
    await session.abortTransaction()
    await session.endSession()

    throw new AppError(httpStatus.BAD_REQUEST, 'Failded to create the student.')
  }

  // return newUser
}

export const userServices = {
  createStudentIntoDB,
}
