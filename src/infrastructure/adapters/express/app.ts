import express from 'express'
import { UserRouter } from '@express/routes'
import { MongooseUserRepository } from '@mongoose/repositories/MongooseUserRepository'

const app = express()
const repositories = {
  userRepository: new MongooseUserRepository(),
}

app.use(express.json())

app.use('/user', UserRouter(repositories.userRepository))

export default app
