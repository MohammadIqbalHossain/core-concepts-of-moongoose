import { Schema, model } from 'mongoose'
import validator from 'validator'
import {
  TGuardian,
  TStudent,
  TUserName,
  studentModel,
} from './student.interface'

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    trim: true,
    max: [20, 'User first name cannot be longer than 20 charecter'],
    required: [true, 'First name is required'],
    validate: {
      validator: function (value: string) {
        return (
          value === value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
        )
      },
      message: 'First name must be capitalize.',
    },
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    trim: true,
    max: [20, 'User last name cannot be longer than 20 charecter'],
    required: [true, 'Last name is required'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid.',
    },
  },
})

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, 'Father name is required'],
    trim: true,
    max: [20, 'Father name cannot be longer than 20 charecter'],
  },
  fatherOccupation: {
    type: String,
  },
  fatherContactNo: {
    type: String,
    trim: true,
    required: [true, 'Father contact number is required'],
  },
  motherName: {
    type: String,
    trim: true,
    required: [true, 'Mother name is required'],
  },
  motherOccupation: {
    type: String,
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother contact number is required'],
  },
})

const localGuardianSchema = new Schema({
  name: {
    type: String,
    max: [20, 'Local guardian name cannot be longer than 20 charecter'],
    required: [true, 'Local guardian name is required'],
  },
  occupation: {
    type: String,
  },
  contactNo: {
    type: String,
    required: [true, 'Local guardian contact number is required'],
  },
  address: {
    type: String,
    required: [true, 'Local guardian address is required'],
  },
})

const studentSchema = new Schema<TStudent, studentModel>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User ID is required'],
      ref: 'User',
    },

    name: {
      type: userNameSchema,
      required: [true, 'User name is required'],
    },

    dateOfBirth: { type: Date },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'others'],
        message:
          '{VALUE} is not valid. The value should be "male" or "female" or "others"',
      },
      required: [true, 'Gender is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    contactNo: { type: String, required: [true, 'Contact number is required'] },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency contact number is required'],
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address is required'],
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent address is required'],
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian information is required'],
    },
    admissionSemester: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'AcademicSemester',
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: 'AcademicDepartment',
    },
    localGuardian: {
      type: localGuardianSchema,
      required: [true, 'Local guardian information is required'],
    },
    studentImg: { type: String },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
)

studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id })
  return existingUser
}

studentSchema.pre('find', function (next) {
  // console.log(this)
  this.find({ isDeleted: { $ne: true } })
  next()
})

studentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } })
  next()
})

// [ { '$match': { id: '56789' } } ]

studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } })
  next()
})

//Virtuals
studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.middleName}`
})

// studentSchema.methods.isUserExists = async function (id: string) {
//   const existingUser = Student.findOne({ id })
//   return existingUser
// }

// Create a model.
export const Student = model<TStudent, studentModel>('Student', studentSchema)
