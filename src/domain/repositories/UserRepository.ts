import { User, UserParams } from '@/entities'

export interface UserRepository {
  createUser: (params: UserParams) => Promise<User>
}
