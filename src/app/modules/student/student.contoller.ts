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
    message: 'Single student fetched successfully.',
    data: result,
  })
})

const updateStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params

  const { student } = req.body
  console.log({ 'update data': student.name })

  const result = await studentServices.updateStudentIntoDB(studentId, student)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single student updated successfully.',
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
  updateStudent,
  deleteStudent,
}
