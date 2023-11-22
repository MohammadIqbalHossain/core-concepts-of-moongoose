import { TStudent } from './student.interface'
import { Student } from './student.model'

const createStudentIntoDB = async (studentData: TStudent) => {
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('User already exists')
  }

  const result = await Student.create(studentData) //Built-in static method.

  // const student = new Student(studentData) //Build-in instance method.

  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists')
  // }

  // const result = student.save()
  return result
}

const getStudentsFromDB = async () => {
  const result = await Student.find()
  return result
}

const getSingleStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id })
  const result = await Student.aggregate([{ $match: { id: id } }])
  return result
}

const deleteSignleStudent = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true })
  return result
}

export const studentServices = {
  createStudentIntoDB,
  getStudentsFromDB,
  getSingleStudentFromDB,
  deleteSignleStudent,
}
