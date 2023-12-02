import config from '../../config'
import { academicSemester } from '../academicSemester/academicSemester.model'
import { TStudent } from '../student/student.interface'
import { Student } from '../student/student.model'
import { generateStudentId } from './user.utils'
import { TUSer } from './users.interface'
import { User } from './users.model'

const createStudentIntoDB = async (password: string, payLoad: TStudent) => {
  const userData: Partial<TUSer> = {}

  //Set a password for user.
  userData.password = password || (config.default_passwrod as string)

  //set a role for password.
  userData.role = 'student'

  const admissionSemester = await academicSemester.findById(
    payLoad.admissionSemester,
  )

  //set a generated id.
  userData.id = await generateStudentId(admissionSemester)

  // User.createIndexes({ key: { email: 1 }, unique: true } as Parameters<
  //   typeof User.createIndexes
  // >[0])

  const newUser = await User.create(userData)

  if (Object.keys(newUser)) {
    payLoad.id = newUser.id
    payLoad.user = newUser._id

    const newStudent = await Student.create(payLoad)
  }

  return newUser
}

export const userServices = {
  createStudentIntoDB,
}
