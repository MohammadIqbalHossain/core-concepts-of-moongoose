import { Schema, model } from 'mongoose'
import {
  Months,
  academicSemesterCode,
  academicSemesterName,
} from './academicSemester.constants'
import { TAcademicSemester } from './academicSemester.interface'

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      require: true,
      enum: academicSemesterName,
    },
    code: {
      type: String,
      require: true,
      enum: academicSemesterCode,
    },
    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: Months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Months,
    },
  },
  {
    timestamps: true,
  },
)

academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await academicSemester.findOne({
    year: this.year,
    name: this.name,
  })

  if (isSemesterExists) {
    throw new Error(`Academic semester is already exists!`)
  }
  next()
})

export const academicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
)
