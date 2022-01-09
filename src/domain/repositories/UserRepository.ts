import { User, UserParams } from '@entities'

export interface UserRepository {
  create: (params: UserParams) => Promise<User>
}
