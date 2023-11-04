const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const findVisible = require('./findVisible')
const ProductsSchema = new mongoose.Schema({

  id: String,
  name: String,
  imageSrc: String,
  imageAlt: String,
  category:{type:mongoose.Schema.Types.ObjectId, ref: 'Categories'},
  brand:{type:mongoose.Schema.Types.ObjectId, ref: 'Brands'},
  countInStock: Number,
  price: String,
  color: String,
  rating: Number,
  description: String,
  createdAt: Date,
  isVisible: {type: Boolean, default: true},

})

const population = [
  {
    path: 'category',
    match: {isVisible: true}
  },
  {
    path: 'brand',
    match: {isVisible: true}
  }
]

ProductsSchema.pre('find', findVisible(population));
ProductsSchema.pre('findOne', findVisible(population));
ProductsSchema.pre('findOneAndUpdate', findVisible());
ProductsSchema.pre('count', findVisible());
ProductsSchema.pre('countDocuments', findVisible());
ProductsSchema.plugin(deepPopulate, {})

const Products = mongoose.model('Products', ProductsSchema, 'Products')

module.exports = Products

