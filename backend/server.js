require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/charity_foundation'

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err))

// Routes
app.use('/api/contacts', require('./routes/contacts'))
app.use('/api/testimonials', require('./routes/testimonials'))
app.use('/api/donations', require('./routes/donations'))

// Basic route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
