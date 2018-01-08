const express = require('express')
const router = express.Router()

const Category = require('../models/category')

router
.route('/category')
.get((req, res) => {
  Category.find()
  .then((items) => {
    res.json(items)
  })
})
module.exports = router
