const express = require('express')
const router = express.Router()
const contactController = require('../controllers/contactController')

// Create a contact message with validation
router.post('/', contactController.validateContact, contactController.createContact)

// Get all contacts
router.get('/', contactController.getAllContacts)

// Get a single contact
router.get('/:id', contactController.getContact)

// Delete a contact
router.delete('/:id', contactController.deleteContact)

module.exports = router
