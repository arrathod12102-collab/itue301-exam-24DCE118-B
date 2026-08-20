const express = require('express');
const router = express.Router();

// Mongoose Models
const Doctor = require('../models/Doctor');

// ============================================
// MongoDB Routes (Task 5)
// ============================================

// GET /api/v1/doctors - Return all doctors from MongoDB
router.get('/', async (req, res, next) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({
      success: true,
      count: doctors.length,
      data: doctors,
    });
  } catch (error) {
    next(error);
  }
});

// POST /api/v1/doctors - Create a new doctor
router.post('/', async (req, res, next) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
