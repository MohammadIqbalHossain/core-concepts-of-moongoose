import httpStatus from 'http-status'
import { Schema, model } from 'mongoose'
import AppError from '../../Error/AppError'
import { TAcademicDepartment } from './academicDepartment.interface'

const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'AcademicFaculty',
    },
  },
  {
    timestamps: true,
  },
)

academicDepartmentSchema.pre('save', async function (next) {
  const isDepertmentExists = await AcademicDepartment.findOne({
    name: this.name,
  })

  if (isDepertmentExists) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This depertment is already exists.',
    )
  }
  next()
})

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery()

  const isDepertmentExists = await AcademicDepartment.findOne(query)

  if (!isDepertmentExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Depertment does not exists!')
  }
  next()
})

export const AcademicDepartment = model<TAcademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema,
)
