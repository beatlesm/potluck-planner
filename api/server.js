const path = require('path')
const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const { restricted } = require('../api/auth/auth-middleware');

const authRouter = require("./auth/auth-router")
const usersRouter = require("./users/users-router.js")
const potlucksRouter = require("./potlucks/potlucks-router")

const server = express()
server.use(express.json())
server.use(logger('dev'))
server.use(express.static(path.join(__dirname, '..', 'client/build' )))
server.use(helmet())
server.use(cors())

server.use("/api/auth", authRouter)
server.use("/api/users", restricted, usersRouter)
server.use("/api/potlucks", restricted, potlucksRouter);

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client/build', 'index.html'))
})

server.use((err, req, res, next) => { // eslint-disable-line   
  res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack
  })
})

module.exports = server
