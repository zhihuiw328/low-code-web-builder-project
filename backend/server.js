const express = require('express')
const dotenv = require('dotenv')
const notFound = require('./middlewares/errorMiddleware')
const errorHandler = require('./middlewares/errorMiddleware')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const secrets = require('./config/secrets')


dotenv.config()

const app = express()

app.use(express.json())

// routes
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

// Connect to a MongoDB --> Uncomment this once you have a connection string!!
mongoose.connect(secrets.mongo_connection,  { useNewUrlParser: true, useUnifiedTopology: true });


app.listen(PORT, console.log(`Server running on port ${PORT}`))