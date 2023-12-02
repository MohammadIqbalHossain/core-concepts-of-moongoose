import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { academicDeparmentServices } from './academicDepartment.services'

const createAcademicDepartment = catchAsync(async (req, res, next) => {
  const payLoad = req.body
  const result =
    await academicDeparmentServices.createAcademicDeparmentIntoDB(payLoad)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic department created successfully.',
    data: result,
  })
})

const getAllAcademicDepartment = catchAsync(async (req, res, next) => {
  const result =
    await academicDeparmentServices.getAllAcademicDepartmentFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic departments fetched successfully.',
    data: result,
  })
})

const getsigleAcademicDepartment = catchAsync(async (req, res, next) => {
  const { departmentId } = req.params
  const result =
    await academicDeparmentServices.getSingleAcademicDepartmentFromDB(
      departmentId,
    )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Fetched a academic department  successfully.',
    data: result,
  })
})

const updateAcademicDepartment = catchAsync(async (req, res, next) => {
  const payLoad = req.body
  const { departmentId } = req.params
  const result = await academicDeparmentServices.updateAcademicDeparmentInDB(
    departmentId,
    payLoad,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic department updated successfully.',
    data: result,
  })
})

export const academicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getsigleAcademicDepartment,
  updateAcademicDepartment,
}
