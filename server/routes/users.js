const express = require('express');
const router = express.Router();
const Users = require('../schemas/users.schema')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await Users.find()
  res.send(users);
});

router.post('/', async function (req, res, next) {
  const { name, password, fullName, email, isAdmin, gender, birthdate} = req.body
  const newUser = await Users.create({
    name, 
    password,
    fullName, 
    email,
    isAdmin, 
    gender,
    birthdate,
    createdAt: new Date(),
  })
  res.send(newUser)
})
router.put('/', async function (req, res, next) {
  const {name, password, fullName, email, isAdmin, gender, birthdate, _id } = req.body
  const newUser = await Users.findByIdAndUpdate(_id,
    {
      name, 
      password,
      fullName, 
      email,
      isAdmin, 
      gender,
      birthdate,
    }, { new: true })
  res.send(newUser);
})
router.delete('/', async function (req, res, next) {
  const { _id } = req.body
  const newUser = await Users.findByIdAndUpdate(_id,
    {
      isVisible: false
    }, { new: true })
  res.send(newUser);
})

module.exports = router;