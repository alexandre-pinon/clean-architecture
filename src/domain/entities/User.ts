import { Role } from '@custom-types'

export type User = {
  id: string | number
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
  role: Role
  description: string
  socialLinks: string[]
}

export type UserParams = Omit<User, 'id'>