import { Request, Response } from 'express'
import { studentServices } from './student.services'
// import studentValidationSchema from './validation.joi'

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getStudentsFromDB()

    res.status(200).json({
      success: true,
      message: 'Students retrived from database',
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

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await studentServices.getSingleStudentFromDB(studentId)

    res.status(200).json({
      success: true,
      message: 'Single student retrieved',
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

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await studentServices.deleteSignleStudent(studentId)

    res.status(200).json({
      success: true,
      message: 'Student deleted successfully.',
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

export const studentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
