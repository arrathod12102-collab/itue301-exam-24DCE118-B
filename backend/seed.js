const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Patient = require('./models/Patient');
const Doctor = require('./models/Doctor');
const Appointment = require('./models/Appointment');
const connectDB = require('./db');

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing
    await Patient.deleteMany();
    await Doctor.deleteMany();
    await Appointment.deleteMany();

    console.log('Seeding rich medical data into MongoDB...');

    // 1. Create Patients
    const patients = await Patient.create([
      {
        name: 'Rahul Kumar',
        email: 'rahul.kumar@gmail.com',
        phone: '+91 98765 43210',
        bloodGroup: 'O+',
        age: 29,
      },
      {
        name: 'Anita Verma',
        email: 'anita.verma@yahoo.com',
        phone: '+91 98123 45678',
        bloodGroup: 'B+',
        age: 34,
      },
      {
        name: 'Suresh Gupta',
        email: 'suresh.gupta@outlook.com',
        phone: '+91 97234 56789',
        bloodGroup: 'A+',
        age: 48,
      },
      {
        name: 'Pooja Sharma',
        email: 'pooja.sharma@gmail.com',
        phone: '+91 96345 67890',
        bloodGroup: 'AB+',
        age: 26,
      },
      {
        name: 'Vikram Joshi',
        email: 'vikram.joshi@gmail.com',
        phone: '+91 95456 78901',
        bloodGroup: 'O-',
        age: 52,
      },
      {
        name: 'Kavita Patel',
        email: 'kavita.patel@rediffmail.com',
        phone: '+91 94567 89012',
        bloodGroup: 'A-',
        age: 31,
      }
    ]);

    // 2. Create Doctors
    const doctors = await Doctor.create([
      {
        name: 'Dr. Rajesh Sharma',
        email: 'rajesh.sharma@medcareplus.com',
        specialisation: 'Cardiology',
        available: true,
      },
      {
        name: 'Dr. Priya Patel',
        email: 'priya.patel@medcareplus.com',
        specialisation: 'Dermatology',
        available: true,
      },
      {
        name: 'Dr. Amit Desai',
        email: 'amit.desai@medcareplus.com',
        specialisation: 'Orthopedics',
        available: true,
      },
      {
        name: 'Dr. Sneha Mehta',
        email: 'sneha.mehta@medcareplus.com',
        specialisation: 'Pediatrics',
        available: true,
      },
      {
        name: 'Dr. Vikram Singh',
        email: 'vikram.singh@medcareplus.com',
        specialisation: 'Neurology',
        available: false,
      },
      {
        name: 'Dr. Ananya Roy',
        email: 'ananya.roy@medcareplus.com',
        specialisation: 'General Medicine',
        available: true,
      }
    ]);

    // 3. Create Rich Appointments
    await Appointment.create([
      {
        patientId: patients[0]._id,
        doctorId: doctors[0]._id,
        date: new Date('2026-08-25'),
        timeSlot: '10:00 AM',
        status: 'confirmed',
        reason: 'Routine ECG checkup & hypertension consultation',
      },
      {
        patientId: patients[1]._id,
        doctorId: doctors[1]._id,
        date: new Date('2026-08-26'),
        timeSlot: '02:30 PM',
        status: 'pending',
        reason: 'Skin rash & allergy treatment follow-up',
      },
      {
        patientId: patients[2]._id,
        doctorId: doctors[2]._id,
        date: new Date('2026-08-24'),
        timeSlot: '11:00 AM',
        status: 'cancelled',
        reason: 'Right knee arthroscopy follow-up scan',
      },
      {
        patientId: patients[3]._id,
        doctorId: doctors[3]._id,
        date: new Date('2026-08-27'),
        timeSlot: '04:00 PM',
        status: 'confirmed',
        reason: 'Infant routine vaccination & wellness check',
      },
      {
        patientId: patients[4]._id,
        doctorId: doctors[4]._id,
        date: new Date('2026-08-28'),
        timeSlot: '09:30 AM',
        status: 'pending',
        reason: 'Chronic migraine and neurological assessment',
      },
      {
        patientId: patients[5]._id,
        doctorId: doctors[5]._id,
        date: new Date('2026-08-29'),
        timeSlot: '12:00 PM',
        status: 'confirmed',
        reason: 'Seasonal viral fever & blood count evaluation',
      }
    ]);

    console.log('✅ MongoDB rich clinical data seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Seed Error:', err);
    process.exit(1);
  }
};

seedData();
