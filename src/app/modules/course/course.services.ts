import httpStatus from 'http-status'
import { startSession } from 'mongoose'
import QueryBuilder from '../../Builder/QueryBuilder'
import AppError from '../../Error/AppError'
import { courseSearchableFields } from './course.constants'
import { TCourse, TCourseFaculty } from './course.interface'
import { Course, CourseFaculty } from './course.model'

const createCourseIntoDB = async (payLoad: TCourse) => {
  const result = await Course.create(payLoad)
  return result
}

const getAllCoursesFromDB = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(
    Course.find().populate('preRequisiteCourse.course'),
    query,
  )
    .search(courseSearchableFields)
    .filter()
    .pagination()
    .sort()
    .fields()
  const result = await courseQuery.queryModel
  return result
}

const getSingleCourseFromDB = async (id: string) => {
  const result = await Course.findById(id).populate('preRequisiteCourse.course')
  return result
}

const updateCourseIntoDB = async (id: string, payLoad: Partial<TCourse>) => {
  const { preRequisiteCourse, ...remainingUpdateData } = payLoad

  const session = await startSession()

  session.startTransaction()
  //Normal update.
  try {
    const updateBasicCourse = await Course.findByIdAndUpdate(
      id,
      remainingUpdateData,
      {
        new: true,
        runValidators: true,
        session,
      },
    )

    if (!updateBasicCourse) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update course!')
    }

    //Check if there is any preRequisiteCourse for update.
    if (preRequisiteCourse && preRequisiteCourse.length > 0) {
      const deletedPreRequisite = preRequisiteCourse.filter(
        (el) => el.course && el.isDeleted === true,
      )

      const getCourseId = deletedPreRequisite.map((el) => el.course)

      const deletedPreRequisiteCourse = await Course.findByIdAndUpdate(
        id,
        {
          $pull: { preRequisiteCourse: { course: { $in: getCourseId } } },
        },
        {
          new: true,
          runValidators: true,
          session,
        },
      )

      if (!deletedPreRequisiteCourse) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update course!')
      }

      const newPreRequisite = preRequisiteCourse.filter(
        (el) => el.course && !el.isDeleted,
      )

      const addPreRequisiteCourse = await Course.findByIdAndUpdate(
        id,
        {
          $addToSet: { preRequisiteCourse: { $each: newPreRequisite } },
        },
        {
          new: true,
          runValidators: true,
          session,
        },
      )

      if (!addPreRequisiteCourse) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update course!')
      }

      const result = Course.findById(id).populate('preRequisiteCourse.course')

      return result
    }

    session.commitTransaction()
    session.endSession()
  } catch (err: any) {
    session.abortTransaction()
    session.endSession()
    throw new Error(err)
  }
}

const deleteCourseFromDB = async (id: string) => {
  const result = await Course.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  )
  return result
}

const assignFacultieswithCourseIntoDB = async (
  id: string,
  payLoad: Partial<TCourseFaculty>,
) => {
  const result = await CourseFaculty.findByIdAndUpdate(
    id,
    {
      course: id,
      $addToSet: { faculties: { $each: payLoad } },
    },
    {
      upsert: true,
      new: true,
    },
  )

  return result
}

const removeFacultiesFromCourseFromDB = async (
  id: string,
  payLoad: Partial<TCourseFaculty>,
) => {
  const result = await CourseFaculty.findByIdAndUpdate(
    id,
    {
      $pull: { faculties: { $in: payLoad } },
    },
    {
      new: true,
    },
  )

  return result
}

export const courseServices = {
  createCourseIntoDB,
  getAllCoursesFromDB,
  getSingleCourseFromDB,
  updateCourseIntoDB,
  deleteCourseFromDB,
  assignFacultieswithCourseIntoDB,
  removeFacultiesFromCourseFromDB,
}
