import cors from 'cors'
import express, { type Application } from 'express'
import globalErrorHandler from './middlewares/globalErrorHandler'
import notFound from './middlewares/notFound'
import router from './routes'

const app: Application = express()

app.use(express.json())
app.use(cors())

//Application routes.
app.use('/api/v1', router)

//Global error handler.
app.use(globalErrorHandler)

//Handleing not found API response.
app.use(notFound)

console.log(process.cwd())

export default app
