const express = require('express')
const Item = require('../models/item')

const router = express.Router()

router
.route('/items')
// Get logged in user’s details
.get((req, res) => {
  Item.find().populate('seller')
  .then((items) => {
    res.json(items)
  })
})
router
.route('/item')
// Get logged in user’s details
.post((req, res) => {
  const body = req.body
  const user = req.user
  const item = new Item({
    seller: user._id,
    name: body.name,
    category: body.categoryId
  })

  item.save()
  .then( item => {
    res.json(item)
  })
  .catch(err => {
    res.status(401).json({error: err})
  })
})
module.exports = router
