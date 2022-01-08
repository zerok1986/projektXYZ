const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/projectXYZ'

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`💻 connected to MongoDB named: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB: ', err)
  })
