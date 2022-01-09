import { User, UserParams } from '@entities'
import { UserRepository } from '@repositories'

export const createUser = (userRepository: UserRepository, params: UserParams): Promise<User> => {
  return userRepository.create(params)
}
