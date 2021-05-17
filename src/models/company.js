import mongoose from "mongoose"
const Schema = mongoose.Schema

const CompanySchema = new Schema({
  companyName: { type: String, required: true },
  cryptoAccept: { type: Boolean, required: true },
  cryptoName: [{ type: String }],
})

module.exports = mongoose.model("Companies", CompanySchema)
