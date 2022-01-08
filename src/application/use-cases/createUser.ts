import { UserParams } from '@/entities'
import { UserRepository } from '@/repositories'

export const createUser = (userRepository: UserRepository, params: UserParams): Promise<UserParams> => {
  return userRepository.createUser(params)
}
