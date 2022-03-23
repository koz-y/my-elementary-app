/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose')

const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId

const ProductSchema = new Schema({
  name: { type: String, required: true, mnax: [60, '最大60文字まで'] },
  price: Number,
  description: String,
  coverImage: String,
})

module.exports = mongoose.model('productModel', ProductSchema)
