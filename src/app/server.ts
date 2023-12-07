import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

let server: Server

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function main() {
  try {
    await mongoose.connect(config.database_url as string)

    server = app.listen(config.port, () => {
      console.log(`Our app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

void main()

process.on('UnhandledPromiseRejection', () => {
  console.log('🔥 Unhandled Rejection is detected, Shutting down...')

  if (server) {
    server.close(() => {
      process.exit(1)
    })
  }
  process.exit(1)
})

process.on('uncaughtException', () => {
  console.log('🔥 uncaughtException is detected, Shutting down...')
  process.exit(1)
})

// console.log(x)

// Promise.reject()
