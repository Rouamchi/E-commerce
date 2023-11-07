const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const UsersSchema = new mongoose.Schema(
  {
  name: {type: String, required: true},
  password: {type: String, required: true},
  fullname: String,
  email: {type: String, required: true},
  isAdmin: {type: Boolean, default: false},
  gender: String,
  birthdate: Date,
  createdAt: Date,
  isVisible: {type: Boolean, default: true}
}
)

const population = []


const Users = mongoose.model('Users', UsersSchema, 'Users')

module.exports = Users