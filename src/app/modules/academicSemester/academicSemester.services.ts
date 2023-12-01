import { NameCodeMapper } from './academicSemester.constants'
import { TAcademicSemester } from './academicSemester.interface'
import { academicSemester } from './academicSemester.model'

const createAcademicSemesterIntoDB = async (payLoad: TAcademicSemester) => {
  //Checking if the semester code defined in the model and payload semester code is matched.
  //name code mapper.
  if (NameCodeMapper[payLoad.name] !== payLoad.code) {
    throw new Error('Invalid semester code!')
  }

  const result = await academicSemester.create(payLoad)
  return result
}

const getAllAceademicSemesterFromDB = async () => {
  const result = await academicSemester.find()
  return result
}

const getSingleAcademicSemester = async (id: string) => {
  const result = await academicSemester.findOne({ _id: id })
  return result
}

const updateAcademicSemesterInDB = async (
  id: string,
  payLoad: Partial<TAcademicSemester>,
) => {
  if (
    payLoad.name &&
    payLoad.code &&
    NameCodeMapper[payLoad.name] !== payLoad.code
  ) {
    throw new Error('Invalid semester code.')
  }

  const result = await academicSemester.findOneAndUpdate({ _id: id }, payLoad, {
    new: true,
    select: '-_id',
  })
  return result
}

export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAceademicSemesterFromDB,
  updateAcademicSemesterInDB,
  getSingleAcademicSemester,
}
