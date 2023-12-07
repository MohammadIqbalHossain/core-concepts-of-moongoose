import { ZodError, ZodIssue } from 'zod'
import { TErrorSource, TGenericErrorResponse } from '../interface/error'

const zodErrorHandler = (err: ZodError): TGenericErrorResponse => {
  const errorSources: TErrorSource = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    }
  })

  return {
    errorSources,
    message: 'Validation error!',
    statusCode: 400,
  }
}

export default zodErrorHandler
