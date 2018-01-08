const express = require('express')
const router = express.Router()
router
.route('/test')
.get((req, res) => {
  res.json({tasks: 'asdf'})
})
module.exports = router