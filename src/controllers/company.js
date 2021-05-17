const express = require("express")
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

//Post a new company
router.post("/", (req, res) => {
  let Company = new Company(req.body)
  Company.save()
    .then((companyResult) => {
      return res.json({ show: companyResult })
    })
    .catch((err) => {
      throw err.message
    })
})

router.put("/:companyId", (req, res) => {
  Company.findByIdAndUpdate({ _id: req.params.companyId }, req.body)
    .then(() => {
      return Company.findOne({ _id: req.params.companyId })
    })
    .then((updatedCompany) => {
      return res.json({ updatedCompany })
    })
    .catch((err) => {
      throw err.message
    })
})

module.exports = router
