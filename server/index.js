/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const mongoose = require('mongoose')

const FakeDb = require('./fake-db')
const config = require('./config/dev')
const productRouts = require('./routes/products')

const app = express()
const port = process.env.PORT || 3001

mongoose.connect(config.DB_URI).then(() => {
  const fakeDb = new FakeDb()
  // fakeDb.seeDb()
  fakeDb.initDb()
})

// app.get('/products', (req, res) => {
//   res.json({ success: true })
// })
app.use('/api/v1/products', productRouts)

app.listen(port, () => {
  console.log(`Node Server is fine on port ${port}`)
})
