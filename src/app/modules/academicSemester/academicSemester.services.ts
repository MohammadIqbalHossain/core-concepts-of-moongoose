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

export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
}
