require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const authRoute = require('./src/routes/auth')
const customerRoute = require('./src/routes/customer')
const { verifyToken } = require('./src/middlewares/verifyToken')

const {
  DatabaseConnectionString,
  UnprotectedRoutes
} = require('./src/utils/constants')
const { includes } = require('lodash')

mongoose
  .connect(DatabaseConnectionString)
  .then(() => console.log('Connection established with Database'))
  .catch((err) => console.error(err))

app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  })
)

// Middlewares
app.use((req, res, next) => {
  if (includes(UnprotectedRoutes, req.path)) {
    next()
  } else {
    verifyToken(req, res, next)
  }
})

// Routes
app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})
app.use('/api/auth', authRoute)
app.use('/api/customer', customerRoute)

app.listen(process.env.PORT || 3006, () => {
  console.log(`Server listening on ${process.env.PORT || 3006}`)
})
