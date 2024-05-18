import app from './app'
import config from './app/config'
import mongoose from 'mongoose'
// import app from './app'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    const port = process.env.PORT || config.port;

    app.listen(port, () => {
      console.log(`App is listening on port ${port}`)
    })
  } catch (err) {
    console.log(err)
  }
}

main()
