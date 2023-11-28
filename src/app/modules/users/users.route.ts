import express from 'express'
import { usersController } from './users.controllers'
const routes = express.Router()

routes.post('/create-student', usersController.createStudent)

export const userRoutes = routes
