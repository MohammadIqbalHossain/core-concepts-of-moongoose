import express from 'express'
import validateRequest from '../../utils/validateRequest'
import { studentController } from './student.contoller'
import { studentValidation } from './student.zod.validation'

const routes = express.Router()

routes.get('/', studentController.getAllStudents)

routes.get('/:studentId', studentController.getSingleStudent)

routes.patch(
  '/:studentId',
  validateRequest(studentValidation.updateStudentValidationSchema),
  studentController.updateStudent,
)

routes.delete('/:studentId', studentController.deleteStudent)

export const studentRoutes = routes
