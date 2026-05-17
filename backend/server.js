require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

const app = express()

// Security Middleware - Helmet adds various HTTP headers for security
app.use(helmet())

// CORS Configuration - Allow only trusted origins
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000', 'https://charitymusyokafoundation.co.ke', 'https://www.charitymusyokafoundation.co.ke'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// Body Parser Middleware
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))

// Rate Limiting - Prevent brute force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
})

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 contact submissions per hour
  message: 'Too many contact submissions, please try again later.'
})

const donationLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 20, // limit each IP to 20 donation attempts per hour
  message: 'Too many donation attempts, please try again later.'
})

// Apply rate limiting
app.use('/api/', limiter)

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/charity_foundation'

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✓ MongoDB connected'))
.catch(err => console.log('✗ MongoDB connection error:', err))

// Routes with rate limiting
app.use('/api/contacts', contactLimiter, require('./routes/contacts'))
app.use('/api/testimonials', require('./routes/testimonials'))
app.use('/api/donations', donationLimiter, require('./routes/donations'))

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() })
})

// 404 Error Handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Not Found', 
    message: 'The requested resource does not exist',
    path: req.originalUrl 
  })
})

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Error:', err)
  
  const status = err.status || 500
  const message = process.env.NODE_ENV === 'production' 
    ? 'Internal Server Error' 
    : err.message
  
  res.status(status).json({ 
    error: message,
    status: status
  })
})

// Export for Vercel serverless functions
module.exports = app

// Local development server
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => {
    console.log(`✓ Server running on port ${PORT}`)
    console.log(`✓ Environment: ${process.env.NODE_ENV || 'development'}`)
  })
}
