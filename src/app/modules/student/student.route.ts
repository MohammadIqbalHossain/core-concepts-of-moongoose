import express from 'express'
import { studentController } from './student.contoller'

const routes = express.Router()

routes.post('/create-student', studentController.createStudent)

routes.get('/', studentController.getAllStudents)

routes.get('/:studnetId', studentController.getSingleStudent)

export const studentRoutes = routes
