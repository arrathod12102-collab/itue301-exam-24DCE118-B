const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');

// Load environment variables
dotenv.config();

// Import middleware
const requestLogger = require('./middleware/requestLogger');
const errorHandler = require('./middleware/errorHandler');

// Import routes
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const patientRoutes = require('./routes/patientRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// ============================================
// Rich In-Memory Data (Task 3)
// ============================================
const inMemoryDoctors = [
  {
    id: 1,
    name: 'Dr. Rajesh Sharma',
    email: 'rajesh.sharma@medcareplus.com',
    specialisation: 'Cardiology',
    available: true,
  },
  {
    id: 2,
    name: 'Dr. Priya Patel',
    email: 'priya.patel@medcareplus.com',
    specialisation: 'Dermatology',
    available: true,
  },
  {
    id: 3,
    name: 'Dr. Amit Desai',
    email: 'amit.desai@medcareplus.com',
    specialisation: 'Orthopedics',
    available: true,
  },
  {
    id: 4,
    name: 'Dr. Sneha Mehta',
    email: 'sneha.mehta@medcareplus.com',
    specialisation: 'Pediatrics',
    available: true,
  },
  {
    id: 5,
    name: 'Dr. Vikram Singh',
    email: 'vikram.singh@medcareplus.com',
    specialisation: 'Neurology',
    available: false,
  },
  {
    id: 6,
    name: 'Dr. Ananya Roy',
    email: 'ananya.roy@medcareplus.com',
    specialisation: 'General Medicine',
    available: true,
  },
];

let inMemoryAppointments = [
  {
    id: 1,
    patientName: 'Rahul Kumar',
    doctorName: 'Dr. Rajesh Sharma',
    date: '2026-08-25',
    timeSlot: '10:00 AM',
    status: 'confirmed',
    reason: 'Routine ECG checkup & hypertension consultation',
  },
  {
    id: 2,
    patientName: 'Anita Verma',
    doctorName: 'Dr. Priya Patel',
    date: '2026-08-26',
    timeSlot: '02:30 PM',
    status: 'pending',
    reason: 'Skin allergy and cosmetology consultation',
  },
  {
    id: 3,
    patientName: 'Suresh Gupta',
    doctorName: 'Dr. Amit Desai',
    date: '2026-08-24',
    timeSlot: '11:00 AM',
    status: 'cancelled',
    reason: 'Right knee arthroscopy scan & follow-up',
  },
  {
    id: 4,
    patientName: 'Pooja Sharma',
    doctorName: 'Dr. Sneha Mehta',
    date: '2026-08-27',
    timeSlot: '04:00 PM',
    status: 'confirmed',
    reason: 'Infant immunization & growth monitoring checkup',
  },
  {
    id: 5,
    patientName: 'Vikram Joshi',
    doctorName: 'Dr. Vikram Singh',
    date: '2026-08-28',
    timeSlot: '09:30 AM',
    status: 'pending',
    reason: 'Chronic migraine and neuro assessment',
  },
  {
    id: 6,
    patientName: 'Kavita Patel',
    doctorName: 'Dr. Ananya Roy',
    date: '2026-08-29',
    timeSlot: '12:00 PM',
    status: 'confirmed',
    reason: 'Seasonal viral fever & comprehensive blood evaluation',
  },
];

// ============================================
// Middleware
// ============================================
app.use(cors());
app.use(express.json());

// Apply requestLogger middleware globally (Task 3)
app.use(requestLogger);

// ============================================
// In-Memory API Routes (Task 3)
// ============================================

// GET /api/v1/doctors - Return all doctors (in-memory)
app.get('/api/v1/doctors', (req, res) => {
  res.status(200).json({
    success: true,
    count: inMemoryDoctors.length,
    data: inMemoryDoctors,
  });
});

// GET /api/v1/appointments - Return all appointments (in-memory)
app.get('/api/v1/appointments', (req, res) => {
  res.status(200).json({
    success: true,
    count: inMemoryAppointments.length,
    data: inMemoryAppointments,
  });
});

// POST /api/v1/appointments - Create a new appointment (in-memory)
app.post('/api/v1/appointments', (req, res) => {
  const { patientName, doctorName, date, timeSlot, status, reason } = req.body;

  if (!patientName || !doctorName || !date || !timeSlot) {
    return res.status(400).json({
      success: false,
      error: 'Please provide patientName, doctorName, date, and timeSlot',
    });
  }

  const newAppointment = {
    id: inMemoryAppointments.length + 1,
    patientName,
    doctorName,
    date,
    timeSlot,
    status: status || 'pending',
    reason: reason || '',
  };

  inMemoryAppointments.push(newAppointment);

  res.status(201).json({
    success: true,
    data: newAppointment,
  });
});

// ============================================
// MongoDB Routes (Task 5)
// ============================================
app.use('/api/v1/db/doctors', doctorRoutes);
app.use('/api/v1/db/appointments', appointmentRoutes);
app.use('/api/v1/db/patients', patientRoutes);

// ============================================
// Global Error-Handling Middleware (Task 3)
// ============================================
app.use(errorHandler);

// ============================================
// Connect to MongoDB and Start Server
// ============================================
const startServer = async () => {
  try {
    if (process.env.MONGO_URI) {
      await connectDB();
      console.log('MongoDB connected successfully');
    }

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();
