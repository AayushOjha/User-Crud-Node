require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const authRoute = require('./src/routes/auth')

const { DatabaseConnectionString } = require('./src/utils/constants')

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

// Routes
app.use('/api/auth', authRoute)

app.listen(process.env.PORT || 3006, () => {
  console.log(`Server listening on ${process.env.PORT || 3006}`)
})
