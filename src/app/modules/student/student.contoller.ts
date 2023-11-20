import { Request, Response } from 'express'
import { studentServices } from './student.services'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body
    const result = await studentServices.createStudentIntoDB(student)

    ///Send response to client.
    res.status(200).json({
      success: true,
      message: 'Created a student',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getStudentsFromDB()

    res.status(200).json({
      success: true,
      message: 'Students retrived from database',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studendId } = req.params
    const result = await studentServices.getSingleStudentFromDB(studendId)

    res.status(200).json({
      success: true,
      message: 'Single student retrieved',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
}
