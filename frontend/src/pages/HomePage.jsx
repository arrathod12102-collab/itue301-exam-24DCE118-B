import React from 'react';
import { Link } from 'react-router-dom';
import AppointmentCard from '../components/AppointmentCard';
import './HomePage.css';

// HomePage Component (Task 1)
// Displays MedCare Plus Hospital info & demonstrates reusable AppointmentCard with props
const HomePage = () => {
  // Rich sample appointments demonstrating AppointmentCard props and varied clinical statuses
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
    {
      id: 4,
      patientName: 'Pooja Sharma',
      doctorName: 'Dr. Sneha Mehta',
      date: '2026-08-27',
      timeSlot: '04:00 PM',
      status: 'confirmed',
    },
    {
      id: 5,
      patientName: 'Vikram Joshi',
      doctorName: 'Dr. Vikram Singh',
      date: '2026-08-28',
      timeSlot: '09:30 AM',
      status: 'pending',
    },
    {
      id: 6,
      patientName: 'Kavita Patel',
      doctorName: 'Dr. Ananya Roy',
      date: '2026-08-29',
      timeSlot: '12:00 PM',
      status: 'confirmed',
    },
  ];

  const departments = [
    { name: 'Cardiology', icon: '❤️', doctors: '8 Specialists', desc: 'Heart care, ECG, bypass surgery & angiography' },
    { name: 'Dermatology', icon: '✨', doctors: '6 Specialists', desc: 'Skin treatments, cosmetology & allergy tests' },
    { name: 'Neurology', icon: '🧠', doctors: '5 Specialists', desc: 'Brain & spine disorders, neuro-trauma care' },
    { name: 'Orthopedics', icon: '🦴', doctors: '7 Specialists', desc: 'Joint replacement, fracture & sports medicine' },
    { name: 'Pediatrics', icon: '👶', doctors: '9 Specialists', desc: 'Child health, immunization & neonatal ICU' },
    { name: 'Emergency Care', icon: '🚨', doctors: '24/7 On-Duty', desc: 'Instant ICU trauma & emergency ambulances' },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-luxury">
        <div className="hero-mesh-glow"></div>
        <div className="hero-content">
          <div className="hero-pill-badge">
            <span className="badge-pulse"></span>
            <span>AI-POWERED HEALTHCARE EXCELLENCE</span>
          </div>

          <h1 className="hero-title">
            Next-Generation <br />
            <span className="hero-gradient-text">Hospital Appointments</span> & Care
          </h1>

          <p className="hero-description">
            Experience world-class healthcare with <strong>MedCare Plus</strong>. Connect with board-certified
            specialists, manage live consultations, and track real-time clinical schedules seamlessly.
          </p>

          <div className="hero-cta-group">
            <Link to="/booking" className="btn-primary-hero">
              <span>Book Appointment Now</span>
              <span className="arrow-glow">→</span>
            </Link>
            <Link to="/doctors" className="btn-secondary-hero">
              <span>Explore Specialists</span>
              <span className="doc-icon">👨‍⚕️</span>
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="stats-glass-bar">
            <div className="stat-item">
              <span className="stat-val">50+</span>
              <span className="stat-title">Senior Doctors</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <span className="stat-val">99.8%</span>
              <span className="stat-title">Satisfaction Rate</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <span className="stat-val">15+</span>
              <span className="stat-title">Super Specialties</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <span className="stat-val">24/7</span>
              <span className="stat-title">Emergency Hotline</span>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="departments-section">
        <div className="section-header-centered">
          <span className="section-eyebrow">SUPER SPECIALTY CLINICS</span>
          <h2 className="section-heading">Excellence Across Every Discipline</h2>
          <p className="section-subtext">Equipped with state-of-the-art diagnostic facilities and internationally trained clinicians.</p>
        </div>

        <div className="departments-grid">
          {departments.map((dept, idx) => (
            <div key={idx} className="department-card">
              <div className="dept-icon-box">{dept.icon}</div>
              <h3 className="dept-name">{dept.name}</h3>
              <span className="dept-doc-count">{dept.doctors}</span>
              <p className="dept-desc">{dept.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Appointments Showcase */}
      <section className="showcase-section">
        <div className="section-header-flex">
          <div>
            <span className="section-eyebrow">LIVE CLINICAL FEED</span>
            <h2 className="section-heading">Recent Scheduled Appointments</h2>
            <p className="section-subtext">Dynamic status-coded cards representing verified patient bookings.</p>
          </div>
          <Link to="/booking" className="link-action-subtle">
            Schedule New +
          </Link>
        </div>

        <div className="cards-luxury-grid">
          {sampleAppointments.map((app) => (
            <AppointmentCard
              key={app.id}
              patientName={app.patientName}
              doctorName={app.doctorName}
              date={app.date}
              timeSlot={app.timeSlot}
              status={app.status}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-luxury">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="brand-title">MedCare<span className="brand-plus">Plus</span></span>
            <p>Advancing modern medicine through compassionate care and technological innovation.</p>
          </div>
          <div className="footer-meta">
            <span>© 2026 MedCare Plus Hospital Network. All Rights Reserved.</span>
            <span>NABH & JCI Accredited Medical Facility</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
