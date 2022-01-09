import app from '@express/app'
import { init as DBInit } from '@mongoose/init'

const run = async () => {
  await DBInit()
  app.listen(8000, () => {
    console.log(`Server listening on 8000`)
  })
}

run()
