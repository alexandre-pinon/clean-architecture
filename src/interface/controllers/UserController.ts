import { createUser } from '@use-cases'
import { UserRepository } from '@repositories'

export const UserController = (userRepository: UserRepository) => ({
  create: async (request: any) => {
    console.log({request})
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
