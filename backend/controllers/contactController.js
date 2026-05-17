const Contact = require('../models/Contact')

// Create a new contact message
exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Please fill in all required fields' })
    }

    const newContact = new Contact({
      name,
      email,
      phone,
      subject,
      message
    })

    await newContact.save()
    res.status(201).json({ message: 'Contact message sent successfully', data: newContact })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get all contact messages
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get a single contact message
exports.getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' })
    }
    res.json(contact)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Delete a contact message
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id)
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' })
    }
    res.json({ message: 'Contact deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
