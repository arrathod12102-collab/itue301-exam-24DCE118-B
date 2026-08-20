import React from 'react';
import './AppointmentCard.css';

// AppointmentCard component (Task 1)
// Accepts props: patientName, doctorName, date, timeSlot, status
const AppointmentCard = ({ patientName, doctorName, date, timeSlot, status }) => {
  return (
    <div className={`appointment-card status-${status}`}>
      <div className="card-header">
        <span className={`status-badge ${status}`}>{status}</span>
      </div>
      <div className="card-body">
        <div className="card-field">
          <span className="field-label">👤 Patient</span>
          <span className="field-value">{patientName}</span>
        </div>
        <div className="card-field">
          <span className="field-label">🩺 Doctor</span>
          <span className="field-value">{doctorName}</span>
        </div>
        <div className="card-field">
          <span className="field-label">📅 Date</span>
          <span className="field-value">{date}</span>
        </div>
        <div className="card-field">
          <span className="field-label">🕐 Time Slot</span>
          <span className="field-value">{timeSlot}</span>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
