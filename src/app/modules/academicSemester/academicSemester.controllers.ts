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

const getSingleAcademicSemester = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const result = await academicSemesterServices.getSingleAcademicSemester(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester fetched successfully.',
    data: result,
  })
})

const updateAcademicSemester = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const updatedData = req.body

  const result = await academicSemesterServices.updateAcademicSemesterInDB(
    id,
    updatedData,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester updated successfully.',
    data: result,
  })
})

export const academicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
  updateAcademicSemester,
  getSingleAcademicSemester,
}
