import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { academicFacultyServices } from './acdemicFaculty.services'

const createAcademicFaculty = catchAsync(async (req, res, next) => {
  const result = await academicFacultyServices.createAcademicFacultyIntoDB(
    req.body,
  )
  console.log({ 'result check': result })

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic faculty created successfully.',
    data: result,
  })
})

const getAllAcademicFaculties = catchAsync(async (req, res, next) => {
  const result = await academicFacultyServices.getAllAcademicFacultiesFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic faculties fetched successfully.',
    data: result,
  })
})

const getSingleAcademicFaculties = catchAsync(async (req, res, next) => {
  const { facultyId } = req.params
  const result =
    await academicFacultyServices.getSingleAcademicFacultyFromDB(facultyId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic faculty fetched successfully.',
    data: result,
  })
})

const updateAcademicFacultiy = catchAsync(async (req, res, next) => {
  const { facultyId } = req.params
  const updateData = req.body
  const result = await academicFacultyServices.updateAcademicSemesterInDB(
    facultyId,
    updateData,
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic faculty updated successfully.',
    data: result,
  })
})

export const academicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculties,
  updateAcademicFacultiy,
}
