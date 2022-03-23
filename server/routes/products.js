const express = require('express')
const router = express.Router()

const productModel = require('../model/product')

// パラメータ無し：すべてのプロダクト
router.get('', (req, res) => {
  productModel.find({}, (err, foundProducts) => {
    return res.json(foundProducts)
  })
})

// パラメータ（id）：指定したidのプロダクト
router.get('/:productId', (req, res) => {
  const productId = req.params.productId
  productModel.findById(productId, (err, foundProduct) => {
    if (err) {
      return res.status(422).send({
        errors: [{ title: 'Product error', detail: 'Product not found' }],
      })
    }

    return res.json(foundProduct)
  })
})
module.exports = router
