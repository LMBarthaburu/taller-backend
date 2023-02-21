require('dotenv').config()
const mongoose = require ('mongoose')
const database = process.env.DB

const connectDB = async () =>{
  try {
    await mongoose.connect(database)
    console.log('DB conectada exitosamente')
  } catch (error) {
    console.log(error)
  }
}

connectDB()