const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const findVisible = require('./findVisible')

const OrderSchema = new mongoose.Schema({

  users: {
    type: mongoose.Schema.Types.ObjectId,
    required: true, ref: 'Users'
  },
  orderItems: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      imageSrc: { type: String, required: true },
      price: { type: Number, required: true },
      products: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, ref: 'Products'
      }
    }
  ],

  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },

  shippingMethod: { type: String, required: true },

  paymentResult: {
    id: { type: String },
    status: { type: String },
    updateTime: { type: String },
    emailAddress: { type: String },
  },

  category: { type: String, required: true },
  description:{type: String, required: true},
  taxtPrice: { type: Number, required: true, default: 0.0 },
  shippingPrice: { type: Number, required: true, default: 0.0 },
  isPaid: { type: Boolean, required: true, default: false },
  paidAt: { type: Date },
  isDelivered: { type: Boolean, required: true, default: false },
  deliveredAt: { type: Date },
  isVisible: { type: Boolean, default: true },

},
  {
    timestamps: true
  }
)

const population = [
  {
    path: 'category',
    match: { isVisible: true }
  },
  {
    path: 'brand',
    match: { isVisible: true }
  }
]

OrderSchema.pre('find', findVisible(population));
OrderSchema.pre('findOne', findVisible(population));
OrderSchema.pre('findOneAndUpdate', findVisible());
OrderSchema.pre('count', findVisible());
OrderSchema.pre('countDocuments', findVisible());
OrderSchema.plugin(deepPopulate, {})

const Order = mongoose.model('Order', OrderSchema, 'Order')

module.exports = Order

