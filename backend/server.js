const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// use router file
app.use('/api/records', require('./routes/recordRoutes'))

// override use of default error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))