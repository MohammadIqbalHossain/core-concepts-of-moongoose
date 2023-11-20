import cors from 'cors'
import express, { type Application } from 'express'
import { studentRoutes } from './modules/student/student.route'

const app: Application = express()

app.use(express.json())
app.use(cors())

//Application routes.
app.use('/api/v1/students', studentRoutes)

// app.get('/', (req: Request, res: Response) => {
//   const a = 10
//   res.sendStatus(200).send(a)
// })

console.log(process.cwd())

export default app
