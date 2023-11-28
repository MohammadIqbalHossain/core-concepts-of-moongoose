import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { userServices } from './users.services'

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body

  const result = await userServices.createStudentIntoDB(password, studentData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student created successfully.',
    data: result,
  })
})

export const usersController = {
  createStudent,
}
