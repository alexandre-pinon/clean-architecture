import { MongooseUser } from '@mongoose/models/MongooseUser'
import { UserRepository } from '@repositories'
import { User, UserParams } from '@entities'

export class MongooseUserRepository implements UserRepository {
  async create(params: UserParams): Promise<User> {
    return await MongooseUser.create(params)
  }
}
