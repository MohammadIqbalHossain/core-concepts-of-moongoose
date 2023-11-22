import express from 'express'
import { studentController } from './student.contoller'

const routes = express.Router()

routes.post('/create-student', studentController.createStudent)

routes.get('/', studentController.getAllStudents)

routes.get('/:studentId', studentController.getSingleStudent)

routes.delete('/:studentId', studentController.deleteStudent)

export const studentRoutes = routes
