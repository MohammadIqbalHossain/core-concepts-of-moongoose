import express from 'express'
import validateRequest from '../../utils/validateRequest'

import { academicSemesterController } from './academicSemester.controllers'
import { academicSemesterValidation } from './academicSemester.validation'

const routes = express.Router()

routes.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidation.createAcademicSemesterValidation),
  academicSemesterController.createAcademicSemester,
)

routes.get('/', academicSemesterController.getAllAcademicSemester)

routes.get('/:id', academicSemesterController.getSingleAcademicSemester)

//I've a conudsion while using patch. Patch is used for a persial update. using validation means user need to know all data, then, why should we use patch method?
routes.patch(
  '/:id',
  validateRequest(academicSemesterValidation.updateAcademicSemesterValidation),
  academicSemesterController.updateAcademicSemester,
)

export const academicSemesterRoutes = routes
