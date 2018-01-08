const mongoose = require('./init')

const categorySchema = mongoose.Schema({
  name: {
    required: true,
    type: String
  }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category
