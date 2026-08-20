const express = require('express');
const router = express.Router();

// Mongoose Model
const Patient = require('../models/Patient');

// GET /api/v1/patients - Return all patients
router.get('/', async (req, res, next) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({
      success: true,
      count: patients.length,
      data: patients,
    });
  } catch (error) {
    next(error);
  }
});

// POST /api/v1/patients - Create a new patient
router.post('/', async (req, res, next) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json({
      success: true,
      data: patient,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
