import React, { useState, useEffect } from 'react';
import './DoctorsPage.css';

// DoctorsPage component (Task 1 + Task 4)
// Fetches doctor data from Express API using fetch + useEffect
// Maintains three states: data, loading, error
const DoctorsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect - API call on component mount (Task 4)
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('http://localhost:5000/api/v1/doctors');
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="doctors-page">
        <h1>Our Doctors</h1>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading doctors...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="doctors-page">
        <h1>Our Doctors</h1>
        <div className="error-container">
          <span className="error-icon">⚠️</span>
          <p className="error-message">Failed to load doctors: {error}</p>
          <p className="error-hint">
            Make sure the backend server is running on port 5000.
          </p>
        </div>
      </div>
    );
  }

  // Success state - Display doctor data from API
  return (
    <div className="doctors-page">
      <h1>Our Doctors</h1>
      <p className="page-subtitle">
        Meet our team of experienced specialists at MedCare Plus.
      </p>
      <div className="doctors-grid">
        {data.map((doctor) => (
          <div key={doctor.id || doctor._id} className="doctor-card">
            <div className="doctor-avatar">
              {doctor.name.charAt(0).toUpperCase()}
            </div>
            <div className="doctor-info">
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-specialisation">{doctor.specialisation}</p>
              <span
                className={`availability-badge ${
                  doctor.available ? 'available' : 'unavailable'
                }`}
              >
                {doctor.available ? '✅ Available' : '❌ Unavailable'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;
