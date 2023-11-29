import { Router } from 'express'
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.route'
import { studentRoutes } from '../modules/student/student.route'
import { userRoutes } from '../modules/users/users.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
