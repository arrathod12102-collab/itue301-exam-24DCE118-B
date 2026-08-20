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

    console.log('Inserting sample data into MongoDB...');

    // 1. Create Patient
    const patient1 = await Patient.create({
      name: 'Rahul Kumar',
      email: 'rahul.kumar@gmail.com',
      phone: '9876543210',
      bloodGroup: 'O+',
      age: 28,
    });

    const patient2 = await Patient.create({
      name: 'Anita Verma',
      email: 'anita.verma@gmail.com',
      phone: '9123456780',
      bloodGroup: 'B+',
      age: 34,
    });

    // 2. Create Doctors
    const doc1 = await Doctor.create({
      name: 'Dr. Rajesh Sharma',
      email: 'rajesh.sharma@medcareplus.com',
      specialisation: 'Cardiology',
      available: true,
    });

    const doc2 = await Doctor.create({
      name: 'Dr. Priya Patel',
      email: 'priya.patel@medcareplus.com',
      specialisation: 'Dermatology',
      available: true,
    });

    // 3. Create Appointment (referencing Patient and Doctor)
    const app1 = await Appointment.create({
      patientId: patient1._id,
      doctorId: doc1._id,
      date: new Date('2026-08-25'),
      timeSlot: '10:00 AM',
      status: 'confirmed',
      reason: 'Regular heart checkup',
    });

    const app2 = await Appointment.create({
      patientId: patient2._id,
      doctorId: doc2._id,
      date: new Date('2026-08-26'),
      timeSlot: '02:30 PM',
      status: 'pending',
      reason: 'Skin consultation',
    });

    console.log('✅ MongoDB Sample Data successfully seeded!');
    console.log('Patients:', [patient1.name, patient2.name]);
    console.log('Doctors:', [doc1.name, doc2.name]);
    console.log('Appointments:', [app1._id, app2._id]);

    process.exit(0);
  } catch (err) {
    console.error('Seed Error:', err);
    process.exit(1);
  }
};

seedData();
