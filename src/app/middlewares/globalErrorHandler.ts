import { NextFunction, Request, Response } from 'express'

const globalErrorHandler = (
  err: {
    statusCode: number
    message: string
  },
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Something went wrong'
  res.status(statusCode).json({
    success: true,
    message,
    error: err,
  })
}

export default globalErrorHandler
