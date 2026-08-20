import React from 'react';
import './AppointmentCard.css';

// AppointmentCard Component (Task 1)
// Accepts props: patientName, doctorName, date, timeSlot, status
const AppointmentCard = ({ patientName, doctorName, date, timeSlot, status }) => {
  // Format date if needed
  const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }) : 'Not Scheduled';

  const getStatusIcon = (st) => {
    switch (st?.toLowerCase()) {
      case 'confirmed': return '✦ Confirmed';
      case 'pending': return '⏳ Pending Review';
      case 'cancelled': return '✕ Cancelled';
      default: return st;
    }
  };

  return (
    <div className={`appointment-card-luxury status-${status}`}>
      <div className="card-glass-glow"></div>
      
      {/* Header with Status Pill */}
      <div className="card-top-row">
        <div className="app-id-tag">
          <span className="live-dot"></span> APPOINTMENT
        </div>
        <span className={`status-pill ${status}`}>
          {getStatusIcon(status)}
        </span>
      </div>

      {/* Patient & Doctor Main Block */}
      <div className="card-person-block">
        <div className="person-row">
          <div className="person-avatar patient-avatar">
            {patientName ? patientName.charAt(0).toUpperCase() : 'P'}
          </div>
          <div className="person-details">
            <span className="role-label">PATIENT NAME</span>
            <h4 className="person-name">{patientName || 'Anonymous Patient'}</h4>
          </div>
        </div>

        <div className="divider-line"></div>

        <div className="person-row">
          <div className="person-avatar doctor-avatar">
            🩺
          </div>
          <div className="person-details">
            <span className="role-label">ASSIGNED SPECIALIST</span>
            <h4 className="doctor-title">{doctorName || 'General Physician'}</h4>
          </div>
        </div>
      </div>

      {/* Footer Details: Date & Time Slot */}
      <div className="card-meta-grid">
        <div className="meta-box">
          <span className="meta-icon">📅</span>
          <div>
            <span className="meta-label">DATE</span>
            <span className="meta-value">{formattedDate !== 'Invalid Date' ? formattedDate : date}</span>
          </div>
        </div>

        <div className="meta-box">
          <span className="meta-icon">⏰</span>
          <div>
            <span className="meta-label">TIME SLOT</span>
            <span className="meta-value">{timeSlot || '--:--'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
