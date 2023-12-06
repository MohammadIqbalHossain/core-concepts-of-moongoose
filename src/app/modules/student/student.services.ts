import httpStatus from 'http-status'
import mongoose from 'mongoose'
import AppError from '../../Error/AppError'
import { User } from '../users/users.model'
import { TStudent } from './student.interface'
import { Student } from './student.model'

const getStudentsFromDB = async () => {
  const result = await Student.find()
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    })
  return result
}

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id })
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    })
  return result
}

const updateStudentIntoDB = async (id: string, payLoad: Partial<TStudent>) => {
  const { name, guardian, localGuardian, ...reminingStudentData } = payLoad

  const modifiedStudentData: Record<string, unknown> = {}

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedStudentData[`name.${key}`] = value
    }
  }

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedStudentData[`guardian.${key}`] = value
    }
  }

  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedStudentData[`localGuardian.${key}`] = value
    }
  }

  const result = await Student.findOneAndUpdate({ id }, modifiedStudentData, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteSignleStudent = async (id: string) => {
  const session = await mongoose.startSession()

  try {
    session.startTransaction()
    const deleteStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    )

    if (!deleteStudent) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'Failed to delete the student data!',
      )
    }

    const deleteUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    )

    if (!deleteUser) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'Failed to delete the user data!',
      )
    }

    await session.commitTransaction()
    await session.endSession()
    return deleteStudent
  } catch (err) {
    await session.abortTransaction()
    await session.endSession()

    throw new AppError(httpStatus.BAD_REQUEST, 'Failded to delete the student.')
  }
}

export const studentServices = {
  getStudentsFromDB,
  getSingleStudentFromDB,
  updateStudentIntoDB,
  deleteSignleStudent,
}
