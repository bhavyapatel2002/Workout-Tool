const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// use corresponding router files
app.use('/api/records', require('./routes/recordRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/exercises', require('./routes/exerciseRoutes'))

// override use of default error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))