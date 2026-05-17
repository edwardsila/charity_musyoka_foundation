const Contact = require('../models/Contact')
const { body, validationResult } = require('express-validator')
const validator = require('validator')

// Validation rules
exports.validateContact = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('phone')
    .trim()
    .optional()
    .matches(/^[\d\s\-\+\(\)]+$/).withMessage('Please provide a valid phone number'),
  body('subject')
    .trim()
    .notEmpty().withMessage('Subject is required')
    .isLength({ min: 5, max: 100 }).withMessage('Subject must be between 5 and 100 characters'),
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 2000 }).withMessage('Message must be between 10 and 2000 characters')
]

// Create a new contact message
exports.createContact = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, phone, subject, message } = req.body

    // Additional security: Check for XSS patterns
    const xssPattern = /<script|javascript:|onerror|onclick/i
    if (xssPattern.test(message) || xssPattern.test(subject) || xssPattern.test(name)) {
      return res.status(400).json({ error: 'Invalid characters detected in input' })
    }

    const newContact = new Contact({
      name: validator.escape(name),
      email: email.toLowerCase(),
      phone: phone || null,
      subject: validator.escape(subject),
      message: validator.escape(message)
    })

    await newContact.save()
    res.status(201).json({ 
      message: 'Contact message sent successfully',
      id: newContact._id 
    })
  } catch (error) {
    console.error('Contact creation error:', error)
    res.status(500).json({ error: 'Failed to save contact message' })
  }
}

// Get all contact messages (admin only)
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).select('-__v')
    res.json({ count: contacts.length, data: contacts })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    res.status(500).json({ error: 'Failed to fetch contacts' })
  }
}

// Get a single contact message
exports.getContact = async (req, res) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid contact ID' })
    }

    const contact = await Contact.findById(req.params.id).select('-__v')
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' })
    }
    res.json(contact)
  } catch (error) {
    console.error('Error fetching contact:', error)
    res.status(500).json({ error: 'Failed to fetch contact' })
  }
}

// Delete a contact message
exports.deleteContact = async (req, res) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid contact ID' })
    }

    const contact = await Contact.findByIdAndDelete(req.params.id)
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' })
    }
    res.json({ message: 'Contact deleted successfully' })
  } catch (error) {
    console.error('Error deleting contact:', error)
    res.status(500).json({ error: 'Failed to delete contact' })
  }
}
