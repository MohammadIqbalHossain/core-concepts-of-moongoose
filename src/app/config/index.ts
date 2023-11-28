import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcript_salt_rounds: process.env.BCRIPT_SALT_ROUNDS,
  default_passwrod: process.env.DEAFAULT_PASS,
}
