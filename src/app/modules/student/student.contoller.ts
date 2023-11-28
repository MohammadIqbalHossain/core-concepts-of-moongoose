import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import { studentServices } from './student.services'

//Controller for retreiving all students from database.
const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentServices.getStudentsFromDB()

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Students retrived from database successfully.',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

//Controller for retreiveing a single student from database.
const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params
    const result = await studentServices.getSingleStudentFromDB(studentId)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single student successfully.',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

//Controller for deteting a single student from database.
const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params
    const result = await studentServices.deleteSignleStudent(studentId)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student deleted successfully.',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const studentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
