import express from 'express'
import validateRequest from '../../utils/validateRequest'
import { studentValidation } from '../student/student.zod.validation'
import { usersController } from './users.controllers'
const routes = express.Router()

routes.post(
  '/create-student',
  validateRequest(studentValidation.createStudentValidationSchema),
  usersController.createStudent,
)

export const userRoutes = routes
