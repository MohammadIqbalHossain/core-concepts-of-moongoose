import httpStatus from 'http-status'
import mongoose from 'mongoose'
import QueryBuilder from '../../Builder/QueryBuilder'
import AppError from '../../Error/AppError'
import { User } from '../users/users.model'
import { searchableFields } from './student.constants'
import { TStudent } from './student.interface'
import { Student } from './student.model'

const getStudentsFromDB = async (query: Record<string, unknown>) => {
  //Makinga copy of query.
  // const queryObj = { ...query }

  // let searchTerm = ''

  // if (query?.searchTerm) {
  //   searchTerm = query?.searchTerm as string
  // }

  // const searchableFields = [
  //   'name',
  //   'name.firstName',
  //   'name.middleName',
  //   'fullName',
  //   'email',
  //   'presentAddress',
  // ]

  // //It's a regEx for partial search.
  // const regexPattern = new RegExp(searchTerm, 'i')

  // //Search partial match based on query. It's initial declaration because didn't used await here.
  // const partialSearchQuery = Student.find({
  //   $or: searchableFields.map((field) => ({
  //     [field]: regexPattern,
  //   })),
  // })

  // //Exclude quey from the query object for filtering!
  // const excludeQuery = ['searchTerm', 'sort', 'limit', 'page', 'fields']
  // excludeQuery.forEach((queryEl) => delete queryObj[queryEl])

  // console.log({ query }, { queryObj })

  // //Use partial search  query and filtering simolteniously.
  // const filterQuery = partialSearchQuery
  //   .find(queryObj)
  //   .populate('admissionSemester')
  //   .populate({
  //     path: 'academicDepartment',
  //     populate: {
  //       path: 'academicFaculty',
  //     },
  //   })

  //Sorting by query parameter or by default sor by 'createdAt' on desending.
  // let sortQueryParam = '-createdAt'

  // if (query?.sort) {
  //   sortQueryParam = query?.sort as string
  // }

  // //Sorting by the sortQueryParams
  // const sortQuery = filterQuery.sort(sortQueryParam)

  // //Limit by limit query params.
  // let limit = 1
  // let page = 1
  // let skip = 0

  // if (query.limit) {
  //   limit = Number(query.limit)
  // }

  // if (query.page) {
  //   page = Number(query.page)
  //   skip = (page - 1) * limit
  // }

  // //Limiting here
  // const paginateQuery = sortQuery.skip(skip)
  // const limitQuery = paginateQuery.limit(limit)

  // let fields = '-__v'

  // if (query.fields) {
  //   fields = (query.fields as string).split(',').join(' ')
  //   console.log({ fields })
  // }

  // const fieldQuery = await limitQuery.select(fields)

  // return fieldQuery

  const studentQuery = new QueryBuilder(
    Student.find()
      .populate('admissionSemester')
      .populate({
        path: 'academicDepartment',
        populate: {
          path: 'academicFaculty',
        },
      }),
    query,
  )
    .search(searchableFields)
    .filter()
    .sort()
    .pagination()
    .fields()
  const result = await studentQuery.queryModel
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
