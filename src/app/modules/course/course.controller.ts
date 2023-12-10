//Controller for retreiving all course from database.

import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { courseServices } from './course.services'

const createCourse = catchAsync(async (req, res, next) => {
  const payLoad = req.body
  const result = await courseServices.createCourseIntoDB(payLoad)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course created successfully.',
    data: result,
  })
})

const getAllCourses = catchAsync(async (req, res, next) => {
  const result = await courseServices.getAllCoursesFromDB(req.query)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses retrived from database successfully.',
    data: result,
  })
})

//Controller for retreiveing a single course from database.
const getSingleCourse = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await courseServices.getSingleCourseFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single course fetched successfully.',
    data: result,
  })
})

const updateCourse = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const updatedCourse = req.body

  console.log({ 'update data': updateCourse })

  const result = await courseServices.updateCourseIntoDB(id, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is updated successfully.',
    data: result,
  })
})

//Controller for deteting a single course from database.
const deleteCourse = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await courseServices.deleteCourseFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course deleted successfully.',
    data: result,
  })
})

const assignFacultieswithCourse = catchAsync(async (req, res, nex) => {
  const { courseId } = req.params
  const { faculties } = req.body

  const result = await courseServices.assignFacultieswithCourseIntoDB(
    courseId,
    faculties,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculties assigned successfully.',
    data: result,
  })
})

const removeFacultiesFromCourse = catchAsync(async (req, res, nex) => {
  const { courseId } = req.params
  const { faculties } = req.body

  const result = await courseServices.removeFacultiesFromCourseFromDB(
    courseId,
    faculties,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculties removed successfully.',
    data: result,
  })
})

export const courseController = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
  assignFacultieswithCourse,
  removeFacultiesFromCourse,
}
