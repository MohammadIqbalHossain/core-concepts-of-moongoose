import { Router } from 'express'
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicSemester.route'
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route'
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.route'
import { courseRoutes } from '../modules/course/course.route'
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
  {
    path: '/academic-faculties',
    route: academicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: academicDepartmentRoutes,
  },
  {
    path: '/courses',
    route: courseRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
