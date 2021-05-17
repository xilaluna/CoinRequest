require("dotenv").config()

const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require("./controllers/company")(app)
require("./data/db")

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`)
})

module.exports = app
