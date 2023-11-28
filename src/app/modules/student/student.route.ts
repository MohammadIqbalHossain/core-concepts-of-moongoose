import express from 'express'
import { studentController } from './student.contoller'

const routes = express.Router()

routes.get('/', studentController.getAllStudents)

routes.get('/:studentId', studentController.getSingleStudent)

routes.delete('/:studentId', studentController.deleteStudent)

export const studentRoutes = routes
