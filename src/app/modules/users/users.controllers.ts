import { Request, Response } from 'express'
import { userServices } from './users.services'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body

    const result = await userServices.createStudentIntoDB(password, studentData)

    ///Send response to client.
    res.status(200).json({
      success: true,
      message: 'Created a student',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: true,
      message: err.message || 'Something went wrong',
      data: err,
    })
  }
}

export const usersController = {
  createStudent,
}
