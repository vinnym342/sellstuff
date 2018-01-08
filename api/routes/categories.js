const express = require('express')
const router = express.Router()
const Category = '../models/category'

router
.route('/category')
.get((req, res) => {
  Category.find()
})
module.exports = router
