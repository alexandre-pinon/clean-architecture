import { Router } from 'express'
import { expressCallback } from '@express/expressCallback'
import { UserController } from '@controllers'
import { UserRepository } from '@repositories'

export const UserRouter = (userRepository: UserRepository) => {
  const router = Router()
  const controller = UserController(userRepository)

  router.post('/create', expressCallback(controller.create))

  return router
}
