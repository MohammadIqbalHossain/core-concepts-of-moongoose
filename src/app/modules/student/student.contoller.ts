import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { studentServices } from './student.services'

//Controller for retreiving all students from database.
const getAllStudents = catchAsync(async (req, res, next) => {
  const result = await studentServices.getStudentsFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students retrived from database successfully.',
    data: result,
  })
})

//Controller for retreiveing a single student from database.
const getSingleStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params
  const result = await studentServices.getSingleStudentFromDB(studentId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single student successfully.',
    data: result,
  })
})

//Controller for deteting a single student from database.
const deleteStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params
  const result = await studentServices.deleteSignleStudent(studentId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student deleted successfully.',
    data: result,
  })
})

export const studentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
