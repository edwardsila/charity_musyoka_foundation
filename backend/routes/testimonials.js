const express = require('express')
const router = express.Router()
const testimonialController = require('../controllers/testimonialController')

// Create a testimonial
router.post('/', testimonialController.createTestimonial)

// Get approved testimonials
router.get('/', testimonialController.getTestimonials)

// Get all testimonials (admin)
router.get('/admin/all', testimonialController.getAllTestimonials)

// Approve a testimonial
router.patch('/:id/approve', testimonialController.approveTestimonial)

// Delete a testimonial
router.delete('/:id', testimonialController.deleteTestimonial)

module.exports = router
