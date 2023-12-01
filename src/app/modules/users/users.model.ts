import bcrypt from 'bcrypt'
import { Schema, model } from 'mongoose'
import config from '../../config'
import { TUSer } from './users.interface'

const userSchema = new Schema<TUSer>(
  {
    id: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      max: [20, 'Password cannot be longer than 20 charecters'],
    },
    needPasswordChange: {
      type: Boolean,
      required: true,
      default: true,
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

userSchema.pre('save', async function (next) {
  // console.log(this, 'Pre hook: we will save data')
  const user = this
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcript_salt_rounds),
  )
  next()
})

userSchema.post('save', function (doc, next) {
  doc.password = ''
  next()
})

export const User = model<TUSer>('User', userSchema)
