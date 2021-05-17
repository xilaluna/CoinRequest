import express from "express"
const Company = require("../models/Company.js")
/* Routes */

//Retrieves list of all company
router.get("/", (req, res) => {
  CompanyName.find()
    .then((companyname) => {
      return res.json({ companyname })
    })
    .catch((err) => {
      throw err.message
    })
})

//Retrieves a genre of a specified Id
router.get("/:companynameId", (req, res) => {
  CompanyName.findOne({ _id: req.params.companynameId })
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      throw err.message
    })
})

//Retrieves all shows of a specific genre
router.get("/:companynameId/shows", (req, res) => {
  Genre.findOne({ _id: req.params.companynameId })
    .populate("shows")
    .then((result) => {
      res.json(result["shows"])
    })
    .catch((err) => {
      throw err.message
    })
})

//Posts a new Genre
router.post("/", (req, res) => {
  let genre = new Genre(req.body)
  genre
    .save()
    .then(() => {
      return res.send(genre)
    })
    .catch((err) => {
      throw err.message
    })
})

//Updates an Existing Genre
router.put("/:genreId", (req, res) => {
  Genre.findByIdAndUpdate(req.params.genreId, req.body)
    .then(() => {
      return Genre.findOne({ _id: req.params.genreId })
    })
    .then((updatedGenre) => {
      return res.json({ updatedGenre })
    })
    .catch((err) => {
      throw err.message
    })
    .catch((err) => {
      throw err.message
    })
})

//Deletes an existing Genre
router.delete("/:genreId", (req, res) => {
  Genre.findByIdAndDelete(req.params.genreId)
    .then((result) => {
      if (result === null) {
        return res.json({ message: "Genre does not exist" })
      }
      return res.json({
        message: "Successfully deleted.",
        _id: req.params.genreId,
      })
    })
    .catch((err) => {
      throw err.message
    })
})

module.exports = router
