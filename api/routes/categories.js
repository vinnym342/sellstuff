const express = require('express')
const router = express.Router()
const Category = '../models/category'

router
.route('/category')
.get((req, res) => {
  Category.find()
  .then(categories => {
    res.json(categories)
  })
})
module.exports = router
