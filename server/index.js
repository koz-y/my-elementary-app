/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const FakeDb = require('./fake-db')
const config = require('./config/index')
const productRouts = require('./routes/products')

const app = express()
const port = process.env.PORT || 3001

mongoose.connect(config.DB_URI).then(() => {
  if (process.env.NODE_ENV !== 'production') {
    const fakeDb = new FakeDb()
    // fakeDb.initDb()
  }
})

app.use('/api/v1/products', productRouts)

if (process.env.NODE_ENV === 'production') {
  const appPath = path.join(__dirname, '..', 'dist', 'my-elementary-app')
  app.use(express.static(appPath))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(appPath, 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`Node Server is fine on port ${port}`)
})
