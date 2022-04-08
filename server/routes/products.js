const express = require('express')
const router = express.Router()

const productModel = require('../model/product')
const UserCtl = require('../controllers/user')

// 動作検証用仮エンドポイント
// router.get('/auth', UserCtl.authMiddleware, (req, res) => {
//   return res.json({ secret: true })
// })

// パラメータ無し：すべてのプロダクト
router.get('', (req, res) => {
  productModel.find({}, (err, foundProducts) => {
    return res.json(foundProducts)
  })
})

// パラメータ（id）：指定したidのプロダクト
router.get('/:productId', UserCtl.authMiddleware, (req, res) => {
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
