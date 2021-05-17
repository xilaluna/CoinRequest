import express from "express"
const router = express.Router()
const Company = require("../models/Company.js")

//Retrieves list of all companies
router.get("/", (req, res) => {
  Company.find()
    .then((companies) => {
      return res.json({ companies })
    })
    .catch((err) => {
      throw err.message
    })
})

//Retrieves a company by Name
router.get("/:companyName", (req, res) => {
  Company.findOne({ _id: req.params.companyName })
    .then((companies) => {
      return res.json({ companies })
    })
    .catch((err) => {
      throw err.message
    })
})

module.exports = router
