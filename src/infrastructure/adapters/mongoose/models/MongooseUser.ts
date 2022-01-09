import { model, Schema } from 'mongoose'
import { User } from '@entities'
import { Role } from '@custom-types'

const schema = new Schema<User>({
  id: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: Number, enum: Role, required: true, default: Role.USER },
  description: { type: String },
  socialLinks: { type: [String] },
})

export const MongooseUser = model<User>('users', schema)
