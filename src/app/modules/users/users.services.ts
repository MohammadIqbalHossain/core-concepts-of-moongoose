import config from '../../config'
import { TStudent } from '../student/student.interface'
import { Student } from '../student/student.model'
import { TUSer } from './users.interface'
import { User } from './users.model'

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUSer> = {}

  //Set a password for user.
  userData.password = password || (config.default_passwrod as string)

  //set a role for password.
  userData.role = 'student'

  //set a generated id.
  userData.id = '20300001'

  const newUser = await User.create(userData)

  if (Object.keys(newUser)) {
    studentData.id = newUser.id
    studentData.user = newUser._id

    const newStudent = await Student.create(studentData)
  }

  return newUser
}

export const userServices = {
  createStudentIntoDB,
}
