import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import { userServices } from './users.services'

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body

    const result = await userServices.createStudentIntoDB(password, studentData)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student created successfully.',
      data: result,
    })
  } catch (err: any) {
    next(err)
  }
}

export const usersController = {
  createStudent,
}
