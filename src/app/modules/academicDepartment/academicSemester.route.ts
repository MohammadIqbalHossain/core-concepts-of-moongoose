import express from 'express'
import validateRequest from '../../utils/validateRequest'
import { academicDeparmentValidation } from './academicDeparment.validation'
import { academicDepartmentControllers } from './acdemicDeparment.controller'

const routes = express.Router()

routes.post(
  '/create-academic-department',
  // validateRequest(
  //   academicDeparmentValidation.createAcademicDeparmentValidationSchema,
  // ),
  academicDepartmentControllers.createAcademicDepartment,
)

routes.get('/', academicDepartmentControllers.getAllAcademicDepartment)

routes.get(
  '/:departmentId',
  academicDepartmentControllers.getsigleAcademicDepartment,
)

routes.patch(
  '/:departmentId',
  validateRequest(
    academicDeparmentValidation.updateAcademicDeparmentValidationSchema,
  ),
  academicDepartmentControllers.updateAcademicDepartment,
)

export const academicDepartmentRoutes = routes
