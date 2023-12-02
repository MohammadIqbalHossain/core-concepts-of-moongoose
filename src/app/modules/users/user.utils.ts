import { TAcademicSemester } from '../academicSemester/academicSemester.interface'
import { User } from './users.model'

const findLastUserID = async () => {
  const lastUserId = await User.findOne({ role: 'student' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUserId?.id ? lastUserId?.id : undefined
}

export const generateStudentId = async (payLoad: TAcademicSemester | null) => {
  const lastStudentID = await findLastUserID()
  const lastStudentSemesterCode = lastStudentID?.substring(4, 6)
  const lastStudentYear = lastStudentID?.substring(0, 4)

  const currentYear = payLoad?.year
  const currentSemesterCode = payLoad?.code

  let currentId = (0).toString()

  if (
    lastStudentID &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentYear === currentYear
  ) {
    currentId = lastStudentID?.substring(6)
  }

  //2030020001

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0')

  incrementId = `${payLoad?.year}${payLoad?.code}${incrementId}`
  return incrementId
}
