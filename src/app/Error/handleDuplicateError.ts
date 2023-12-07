import { TErrorSource, TGenericErrorResponse } from '../interface/error'

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const regex = /name: "(.*?)"/
  const matchedMessage = err.message.match(regex)
  const firstMatchedValue = matchedMessage[1]

  const errorSources: TErrorSource = [
    {
      path: '',
      message: `${firstMatchedValue} is already exists!`,
    },
  ]
  const statusCode = 400
  return {
    statusCode,
    message: 'Duplicate entity!',
    errorSources,
  }
}

export default handleDuplicateError
