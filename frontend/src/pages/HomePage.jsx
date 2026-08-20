import React from 'react';
import AppointmentCard from '../components/AppointmentCard';
import './HomePage.css';

const HomePage = () => {
  // Sample appointment data to demonstrate AppointmentCard with props (Task 1)
  const sampleAppointments = [
    {
      id: 1,
      patientName: 'Rahul Kumar',
      doctorName: 'Dr. Rajesh Sharma',
      date: '2026-08-25',
      timeSlot: '10:00 AM',
      status: 'confirmed',
    },
    {
      id: 2,
      patientName: 'Anita Verma',
      doctorName: 'Dr. Priya Patel',
      date: '2026-08-26',
      timeSlot: '02:30 PM',
      status: 'pending',
    },
    {
      id: 3,
      patientName: 'Suresh Gupta',
      doctorName: 'Dr. Amit Desai',
      date: '2026-08-24',
      timeSlot: '11:00 AM',
      status: 'cancelled',
    },
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to <span className="highlight">MedCare Plus</span></h1>
          <p className="hero-subtitle">
            Your trusted partner in healthcare. Book appointments with top
            specialists quickly and easily.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Doctors</span>
            </div>
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Patients</span>
            </div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Specialisations</span>
            </div>
          </div>
        </div>
      </section>

      <section className="recent-appointments">
        <h2>Recent Appointments</h2>
        <p className="section-desc">
          Below are sample appointment cards demonstrating different statuses
          (confirmed, pending, cancelled).
        </p>
        <div className="appointments-grid">
          {sampleAppointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              patientName={appointment.patientName}
              doctorName={appointment.doctorName}
              date={appointment.date}
              timeSlot={appointment.timeSlot}
              status={appointment.status}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
