require("dotenv").config()

import mongoose from "mongoose"

const url = process.env.MONGO_URI
mongoose.Promise = global.Promise

mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  function (db, err) {
    console.log("Connected Successfully to Database")
  }
)

mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"))
mongoose.set("debug", true)

module.exports = mongoose.connection
