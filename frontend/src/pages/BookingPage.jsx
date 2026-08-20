import React, { useState } from 'react';
import AppointmentCard from '../components/AppointmentCard';
import './BookingPage.css';

// BookingPage component (Task 2)
// Uses useState for form data and selected doctor
const BookingPage = () => {
  // State 1: Form data (Task 2)
  const [formData, setFormData] = useState({
    patientName: '',
    doctorName: '',
    date: '',
    timeSlot: '',
  });

  // State 2: Selected doctor (Task 2 - meaningful second state)
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const [showPreview, setShowPreview] = useState(false);

  const doctors = [
    'Dr. Rajesh Sharma - Cardiology',
    'Dr. Priya Patel - Dermatology',
    'Dr. Amit Desai - Orthopedics',
    'Dr. Sneha Mehta - Pediatrics',
    'Dr. Vikram Singh - Neurology',
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'doctorName') {
      setSelectedDoctor(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  return (
    <div className="booking-page">
      <h1>Book an Appointment</h1>
      <p className="page-subtitle">
        Fill in the details below to schedule your visit at MedCare Plus.
      </p>

      <div className="booking-layout">
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="patientName">Patient Name</label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              placeholder="Enter patient name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="doctorName">Select Doctor</label>
            <select
              id="doctorName"
              name="doctorName"
              value={formData.doctorName}
              onChange={handleChange}
              required
            >
              <option value="">-- Select a Doctor --</option>
              {doctors.map((doc, index) => (
                <option key={index} value={doc}>{doc}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Appointment Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="timeSlot">Time Slot</label>
            <select
              id="timeSlot"
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Time Slot --</option>
              {timeSlots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="submit-btn">Book Appointment</button>
        </form>

        {/* Live Preview - Shows state changes in real-time (Task 2) */}
        <div className="preview-section">
          <h3>📋 Live Preview</h3>
          <p className="preview-hint">Form data updates in real-time as you type.</p>

          <div className="live-values">
            <div className="live-field">
              <span className="live-label">Patient Name:</span>
              <span className="live-value">{formData.patientName || '—'}</span>
            </div>
            <div className="live-field">
              <span className="live-label">Selected Doctor:</span>
              <span className="live-value">{selectedDoctor || '—'}</span>
            </div>
            <div className="live-field">
              <span className="live-label">Date:</span>
              <span className="live-value">{formData.date || '—'}</span>
            </div>
            <div className="live-field">
              <span className="live-label">Time Slot:</span>
              <span className="live-value">{formData.timeSlot || '—'}</span>
            </div>
          </div>

          {showPreview && formData.patientName && formData.doctorName && (
            <div className="card-preview">
              <h4>Appointment Preview:</h4>
              <AppointmentCard
                patientName={formData.patientName}
                doctorName={formData.doctorName}
                date={formData.date}
                timeSlot={formData.timeSlot}
                status="pending"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
