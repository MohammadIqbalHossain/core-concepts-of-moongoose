import { ErrorRequestHandler } from 'express'
import { ZodError } from 'zod'
import AppError from '../Error/AppError'
import handleCasteError from '../Error/handleCasteError'
import handleDuplicateError from '../Error/handleDuplicateError'
import mongooseValidationError from '../Error/mongooseValidationError'
import zodErrorHandler from '../Error/zodErrorHandler'
import config from '../config'
import { TErrorSource } from '../interface/error'

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500
  let message = err.message || 'Something went wrong'

  let errorSoources: TErrorSource = [
    {
      path: '',
      message: 'Something went wrong!',
    },
  ]

  if (err instanceof ZodError) {
    const simplifiedError = zodErrorHandler(err)

    message = simplifiedError?.message
    errorSoources = simplifiedError?.errorSources
    statusCode = simplifiedError?.statusCode
  } else if (err?.name === 'ValidationError') {
    const simplifiedError = mongooseValidationError(err)

    message = simplifiedError?.message
    errorSoources = simplifiedError?.errorSources
    statusCode = simplifiedError?.statusCode
  } else if (err?.name === 'CastError') {
    const simplifiedError = handleCasteError(err)

    message = simplifiedError?.message
    errorSoources = simplifiedError?.errorSources
    statusCode = simplifiedError?.statusCode
  } else if (err?.code === 11000) {
    const simplifiedError = handleDuplicateError(err)

    message = simplifiedError?.message
    errorSoources = simplifiedError?.errorSources
    statusCode = simplifiedError?.statusCode
  } else if (err instanceof AppError) {
    ;(message = err?.message),
      (statusCode = err?.statusCode),
      (errorSoources = [
        {
          path: '',
          message: err?.message,
        },
      ])
  } else if (err instanceof Error) {
    ;(message = err?.message),
      (errorSoources = [
        {
          path: '',
          message: err?.message,
        },
      ])
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorSoources,
    // err,
    stack: config.NODE_ENV === 'developmnet' ? err.stack : null,
  })
}

// Default error format.
/*
success: false,
message: 'Something went wrong.'
errorSources: [
  {
    path: '',
    message: '
}
]
*/

export default globalErrorHandler
