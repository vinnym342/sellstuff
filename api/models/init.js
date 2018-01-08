const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/generic')

const db = mongoose.connection

module.exports = mongoose
