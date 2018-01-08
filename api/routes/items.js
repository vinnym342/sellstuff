const express = require('express')
const Item = require('../models/item')

const router = express.Router()

router
.route('/items')
// Get logged in user’s details
.get((req, res) => {
  Item.find()
  .then((items) => {
    res.json(items)
  })
})
router
.route('/item')
// Get logged in user’s details
.post((req, res) => {
  const info = req.body
  res.json(info)
})
module.exports = router
