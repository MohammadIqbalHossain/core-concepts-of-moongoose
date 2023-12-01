import { TAcademicSemester } from '../academicSemester/academicSemester.interface'
import { User } from './users.model'

const findLastUserID = async () => {
  const lastUserId = await User.findOne({ role: 'student' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUserId?.id ? lastUserId?.id.substring(6) : undefined
}

export const generateStudentId = async (payLoad: TAcademicSemester | null) => {
  console.log(await findLastUserID())
  const currentId = (await findLastUserID()) || (0).toString()
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0')

  incrementId = `${payLoad?.year}${payLoad?.code}${incrementId}`
  return incrementId
}
