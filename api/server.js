const express = require('express')
const bodyParser = require('body-parser')
const seedAndReset = require('./db/seedAndReset')
const cors = require('cors')
const server = express()
const listenport = 3000

const authMiddleware = require('./middleware/auth')

//Routes
const authRouter = require('./routes/auth')
const testRouter = require('./routes/test')
const itemRouter = require('./routes/items')
const categoryRouter = require('./routes/categories')

// Middleware
server.use(authMiddleware.initialize)
server.use(bodyParser.json())
server.use(cors())

// authorization: jwt <web token>
server.use(authRouter)

server.get('/hai', (req,res)=> {
  res.json({message: 'testing 123'})
})
server.get('/seednreset', (req,res)=> {
  seedAndReset()
  res.json({message: 'testing 123'})
})

server.use(categoryRouter)
server.use(authMiddleware.authenticateJWT,testRouter)
server.use(authMiddleware.authenticateJWT,itemRouter)

// Handle errors by returning JSON
server.use((error, req, res, next) => {
  const status = error.status || 500
  res.status(status).json({
    error: { message: error.message }
  })
})

server.listen(listenport, () => {
    console.log(`Started at localhost:${listenport}`)
})
