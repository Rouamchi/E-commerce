const express = require('express');
const router = express.Router();
const Products = require('../schemas/products.schema')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const products = await Products.find()
  res.send(products);
});

router.post('/', async function (req, res, next) {
  const { name, imageSrc, imageAlt, brand, description, category, countInStock, price, color, rating } = req.body
  const newProduct = await Products.create({
    name, 
    imageSrc,
    imageAlt, 
    description,
    brand,
    category, 
    countInStock,
    price, color, 
    rating,
    createdAt: new Date(),
  })
  res.send(newProduct)
})
router.put('/', async function (req, res, next) {
  const { name, imageSrc, imageAlt, brand, description, category, countInStock, price, color, rating, _id } = req.body
  const newProduct = await Products.findByIdAndUpdate(_id,
    {
      name, 
      imageSrc,
      imageAlt, 
      brand,
      description,
      category, 
      countInStock,
      price, color, 
      rating,
    }, { new: true })
  res.send(newProduct);
})
router.delete('/', async function (req, res, next) {
  const { _id } = req.body
  const newProduct = await Products.findByIdAndUpdate(_id,
    {
      isVisible: false
    }, { new: true })
  res.send(newProduct);
})

module.exports = router;