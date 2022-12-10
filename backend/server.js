const dotenv = require('dotenv')
const path = require('path')
const express = require('express')
const notFound = require('./middlewares/notFoundMiddleware')
const errorHandler = require('./middlewares/errorHandlerMiddleware')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const secrets = require('./config/secrets')
const uploadRoutes = require('./routes/uploadRoutes')
const templateRoutes = require('./routes/templateRoutes')

dotenv.config()

const app = express()

app.use(express.json())

// routes
app.use('/api/users', userRoutes)
app.use('/api/template', templateRoutes)

app.use('/api/upload', uploadRoutes)
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(errorHandler)
app.use(notFound)

const PORT = process.env.PORT || 4000

// Connect to a MongoDB --> Uncomment this once you have a connection string!!
mongoose.connect(secrets.mongo_connection,  { useNewUrlParser: true, useUnifiedTopology: true });


app.listen(PORT, console.log(`Server running on port ${PORT}`))