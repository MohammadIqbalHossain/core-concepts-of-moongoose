import express from 'express'
import validateRequest from '../../utils/validateRequest'

import { academicSemesterController } from './academicSemester.controllers'
import academicSemesterValidation from './academicSemester.validation'

const routes = express.Router()

routes.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidation),
  academicSemesterController.createAcademicSemester,
)

export const academicSemesterRoutes = routes
