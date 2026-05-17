const Donation = require('../models/Donation')

// Create a new donation
exports.createDonation = async (req, res) => {
  try {
    const { donorName, email, amount, message, paymentMethod } = req.body

    if (!donorName || !email || !amount || !paymentMethod) {
      return res.status(400).json({ error: 'Please fill in all required fields' })
    }

    if (amount < 1) {
      return res.status(400).json({ error: 'Donation amount must be at least 1' })
    }

    const newDonation = new Donation({
      donorName,
      email,
      amount,
      message,
      paymentMethod,
      status: 'pending'
    })

    await newDonation.save()
    res.status(201).json({ message: 'Donation created successfully', data: newDonation })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get all donations
exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 })
    res.json(donations)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get a single donation
exports.getDonation = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id)
    if (!donation) {
      return res.status(404).json({ error: 'Donation not found' })
    }
    res.json(donation)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Update donation status
exports.updateDonationStatus = async (req, res) => {
  try {
    const { status, transactionId } = req.body
    const donation = await Donation.findByIdAndUpdate(
      req.params.id,
      { status, transactionId },
      { new: true }
    )
    if (!donation) {
      return res.status(404).json({ error: 'Donation not found' })
    }
    res.json({ message: 'Donation status updated', data: donation })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get donation statistics
exports.getDonationStats = async (req, res) => {
  try {
    const total = await Donation.aggregate([
      { $match: { status: 'completed' } },
      { $group: { _id: null, totalAmount: { $sum: '$amount' }, count: { $sum: 1 } } }
    ])
    res.json(total[0] || { totalAmount: 0, count: 0 })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
