import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { academicSemesterServices } from './academicSemester.services'

const createAcademicSemester = catchAsync(async (req, res, next) => {
  const result = await academicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester created successfully.',
    data: result,
  })
})

const getAllAcademicSemester = catchAsync(async (req, res, next) => {
  const result = await academicSemesterServices.getAllAceademicSemesterFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semesters fetched successfully.',
    data: result,
  })
})

export const academicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
}
