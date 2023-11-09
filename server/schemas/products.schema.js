const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const findVisible = require('./findVisible')

const reviewSchema = new mongoose.Schema(
  {
    name:{type: String, required: true},
    rating: {type: Number, required: true},
    comment:{type: String, required: true},
  },
  {
    createdAt: Date,
  }
)
const ProductsSchema = new mongoose.Schema({

  users: { type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
  name: {type: String, required: true},
  imageSrc: {type: String, required: true},
  imageAlt: {type: String, required: true},
  description:{type: String, required: true},
  brand: {type: String, required: true},
  category: {type: String, required: true},
  price: {type: Number, required: true, default: 0},
  countInStock: {type: Number, required: true, default: 0},
  rating: {type: Number, required: true, default: 0},
  reviews:[reviewSchema],
  color: String,
  createdAt: Date,
  isVisible: { type: Boolean, default: true },

})

const population = [
  {
    path: 'users',
    match: { isVisible: true }
  },
  {
    path: 'category',
    match: { isVisible: true }
  },
  {
    path: 'brand',
    match: { isVisible: true }
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

