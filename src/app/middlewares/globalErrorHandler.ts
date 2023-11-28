import { NextFunction, Request, Response } from 'express'

const globalErrorHandler = (
  err: { message: any },
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500
  const message = err.message || 'Something went wrong'
  res.status(statusCode).json({
    success: true,
    message,
    error: err,
  })
}

export default globalErrorHandler
