const express = require('express');
const router = express.Router();

// Mongoose Models
const Appointment = require('../models/Appointment');

// ============================================
// MongoDB Routes (Task 5)
// ============================================

// GET /api/v1/appointments - Return all appointments from MongoDB
router.get('/', async (req, res, next) => {
  try {
    const appointments = await Appointment.find()
      .populate('patientId', 'name email')
      .populate('doctorId', 'name specialisation');
    res.status(200).json({
      success: true,
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    next(error);
  }
});

// POST /api/v1/appointments - Create a new appointment
router.post('/', async (req, res, next) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
