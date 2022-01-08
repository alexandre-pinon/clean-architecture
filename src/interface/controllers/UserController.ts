import { UserRepository } from '@/repositories'
import { createUser } from '@/use-cases'

export const UserController = (userRepository: UserRepository) => ({
  create: async (request: any) => {
    const user = await createUser(userRepository, request.body)
    return {
      headers: {
        'Content-Type': 'application/json',
      },
      statusCode: 201,
      body: { user },
    }
  },
})
