export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export type TAcademicSemesterName = 'Autmn' | 'Summer' | 'Fall'
export type TAcademicSemesterCode = '01' | '02' | '03'

export type TAcademicSemester = {
  name: TAcademicSemesterName
  code: TAcademicSemesterCode
  year: string
  startMonth: TMonths
  endMonth: TMonths
}

//Type for checking name and code is matched when making academic semester.
export type TNameCodeMapper = {
  [key: string]: string
}
