const Testimonial = require('../models/Testimonial')

// Create a new testimonial
exports.createTestimonial = async (req, res) => {
  try {
    const { quote, author, role, image } = req.body

    if (!quote || !author) {
      return res.status(400).json({ error: 'Quote and author are required' })
    }

    const newTestimonial = new Testimonial({
      quote,
      author,
      role,
      image,
      approved: false
    })

    await newTestimonial.save()
    res.status(201).json({ message: 'Testimonial submitted successfully', data: newTestimonial })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get all approved testimonials
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ approved: true }).sort({ createdAt: -1 })
    res.json(testimonials)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get all testimonials (admin)
exports.getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 })
    res.json(testimonials)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Approve a testimonial
exports.approveTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    )
    if (!testimonial) {
      return res.status(404).json({ error: 'Testimonial not found' })
    }
    res.json({ message: 'Testimonial approved', data: testimonial })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Delete a testimonial
exports.deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id)
    if (!testimonial) {
      return res.status(404).json({ error: 'Testimonial not found' })
    }
    res.json({ message: 'Testimonial deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
