/* eslint-disable @typescript-eslint/no-var-requires */
const productModel = require('./model/product')

class FakeDb {
  constructor() {
    this.products = [
      {
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of hte best screens',
        coverImage: './assets/img/y1167.png',
      },
      {
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of hte best camers',
        coverImage: './assets/img/y1168.png',
      },
      {
        name: 'Phone standard',
        price: 299,
        description: 'A normal phone with one of hte best prices',
        coverImage: './assets/img/y1169.png',
      },
      {
        name: 'Phone Max',
        price: 999,
        description: 'A spcial phone with one of hte best performances',
        coverImage: './assets/img/y1170.png',
      },
    ]
  }

  initDb() {
    this.cleanDb()
    this.pushProductsToDb()
  }

  async cleanDb() {
    await productModel.deleteMany({})
  }

  pushProductsToDb() {
    this.products.forEach((product) => {
      const newProduct = new productModel(product)
      newProduct.save()
    })
  }

  seeDb() {
    this.pushProductsToDb()
  }
}
module.exports = FakeDb
