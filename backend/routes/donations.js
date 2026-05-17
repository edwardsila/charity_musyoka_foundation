const express = require('express')
const router = express.Router()
const donationController = require('../controllers/donationController')

// Create a donation
router.post('/', donationController.createDonation)

// Get all donations
router.get('/', donationController.getDonations)

// Get a single donation
router.get('/:id', donationController.getDonation)

// Update donation status
router.patch('/:id/status', donationController.updateDonationStatus)

// Get donation statistics
router.get('/stats/total', donationController.getDonationStats)

module.exports = router
