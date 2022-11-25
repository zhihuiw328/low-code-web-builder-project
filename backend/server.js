const express = require('express')
const dotenv = require('dotenv')
const notFound = require('./middlewares/errorMiddleware')
const errorHandler = require('./middlewares/errorMiddleware')

const userRoutes = require('./routes/userRoutes')

dotenv.config()

const app = express()

app.use(express.json())

// routes
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))