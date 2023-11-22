import { Request, Response } from 'express'
import { studentServices } from './student.services'
import { StudentZodSchema } from './student.zod.validation'
// import studentValidationSchema from './validation.joi'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body

    //Validation using joi.
    // const { error, value } = studentValidationSchema.validate(studentData)
    const validationParse = StudentZodSchema.parse(studentData)

    const result = await studentServices.createStudentIntoDB(validationParse)

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Joi validation error.',
    //     error: error.details,
    //   })
    // }

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
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
