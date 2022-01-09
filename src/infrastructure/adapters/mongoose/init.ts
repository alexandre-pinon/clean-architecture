import mongoose from 'mongoose'

export const init = () => {
  mongoose.connect(
    'mongodb+srv://admin:D3fXduamMxhte4z@cluster0.al3dg.mongodb.net/blogBasicDev?retryWrites=true&w=majority'
  )

  const db = mongoose.connection

  return new Promise<void>((resolve, reject) => {
    db.on('error', () => {
      console.error.bind(console, 'connection error:')
      reject()
    })
    db.once('open', () => {
      console.log('MongoDB Connected!')
      resolve()
    })
  })
}
