const mongoose = require('./init')

const itemSchema = mongoose.Schema({
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'seller must be listed']
  },
  name: {
    type: String,
    required: [true, 'Must have name for item']
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'seller must be listed']
  },
  price: Number
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item
