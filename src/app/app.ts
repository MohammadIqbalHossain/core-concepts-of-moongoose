import cors from 'cors'
import express, { type Application } from 'express'
import { studentRoutes } from './modules/student/student.route'
import { userRoutes } from './modules/users/users.route'

const app: Application = express()

app.use(express.json())
app.use(cors())

//Application routes.
app.use('/api/v1/students', studentRoutes)
app.use('/api/v1/users', userRoutes)

// app.get('/', (req: Request, res: Response) => {
//   const a = 10
//   res.sendStatus(200).send(a)
// })

console.log(process.cwd())

export default app
