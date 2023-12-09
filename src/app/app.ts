import cors from 'cors'
import express, { Request, Response, type Application } from 'express'
import globalErrorHandler from './middlewares/globalErrorHandler'
import notFound from './middlewares/notFound'
import router from './routes'

const app: Application = express()

app.use(express.json())
app.use(cors())

const test = async (req: Request, res: Response) => {
  //   const a = 10
  res.send('this is a test rotue')
}

//Application routes.
app.use('/api/v1', router)

//Test route!
app.use('/', test)

//Global error handler.
app.use(globalErrorHandler)

//Handleing not found API response.
app.use(notFound)

console.log(process.cwd())

export default app
function async(
  arg0: string,
  arg1: (req: Request, res: Response) => void,
  arg2: express.Application,
  arg3: express.Application,
  arg4: express.Application,
  arg5: void,
) {
  throw new Error('Function not implemented.')
}
