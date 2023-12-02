import { TAcademicFaculty } from './academicFaculty.interface'
import AcademicFaculty from './academicFaculty.model'

const createAcademicFacultyIntoDB = async (payLoad: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payLoad)
  return result
}

const getAllAcademicFacultiesFromDB = async () => {
  const result = await AcademicFaculty.find()
  return result
}

const getSingleAcademicFacultyFromDB = async (facultyId: string) => {
  const result = await AcademicFaculty.findOne({ _id: facultyId })
  return result
}

const updateAcademicSemesterInDB = async (
  semesterId: string,
  payLoad: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFaculty.findOneAndUpdate(
    { _id: semesterId },
    payLoad,
    { new: true, select: { _id: 0 } },
  )
  return result
}

export const academicFacultyServices = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultiesFromDB,
  getSingleAcademicFacultyFromDB,
  updateAcademicSemesterInDB,
}
