import express from 'express'
import validateRequest from '../../utils/validateRequest'
import { courseController } from './course.controller'
import { courseValidationSchemas } from './course.validation'

const routes = express.Router()

routes.post(
  '/create-course',
  validateRequest(courseValidationSchemas.createCourseValidationSchema),
  courseController.createCourse,
)

routes.get('/', courseController.getAllCourses)

routes.get('/:id', courseController.getSingleCourse)

routes.delete('/:id', courseController.deleteCourse)

routes.patch(
  '/:id',
  validateRequest(courseValidationSchemas.updateCourseValidationSchema),
  courseController.updateCourse,
)

routes.put(
  '/:courseId/assign-faculties',
  validateRequest(courseValidationSchemas.facultieswithCourseValidationSchema),
  courseController.assignFacultieswithCourse,
)

routes.delete(
  '/:courseId/remove-faculties',
  validateRequest(courseValidationSchemas.facultieswithCourseValidationSchema),
  courseController.removeFacultiesFromCourse,
)

export const courseRoutes = routes
