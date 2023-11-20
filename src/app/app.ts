import cors from 'cors'
import express, {
  type Application,
  type Request,
  type Response
} from 'express'

const app: Application = express()

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  const a = 10
  res.send(a)
})

console.log(process.cwd())

export default app
