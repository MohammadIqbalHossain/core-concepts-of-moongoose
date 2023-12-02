import express from 'express'
import validateRequest from '../../utils/validateRequest'
import { academicFacultyController } from './academicFaculty.controller'
import { academicFacultyValidation } from './academicFaculty.validation'
const routes = express.Router()

routes.post(
  '/create-academic-faculty',
  validateRequest(
    academicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  academicFacultyController.createAcademicFaculty,
)

routes.get('/', academicFacultyController.getAllAcademicFaculties)

routes.get('/:facultyId', academicFacultyController.getSingleAcademicFaculties)

routes.patch(
  '/:facultyId',
  validateRequest(
    academicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  academicFacultyController.updateAcademicFacultiy,
)

export const academicFacultyRoutes = routes
