import {
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonths,
  TNameCodeMapper,
} from './academicSemester.interface'

export const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const academicSemesterName: TAcademicSemesterName[] = [
  'Autmn',
  'Summer',
  'Fall',
]
export const academicSemesterCode: TAcademicSemesterCode[] = ['01', '02', '03']

//Mapper for checking if name and code is matched when making academic semester.
export const NameCodeMapper: TNameCodeMapper = {
  Autmn: '01',
  Summar: '02',
  Fall: '03',
}
