import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DoctorsPage.css';

// DoctorsPage Component (Task 1 + Task 4)
// Fetches doctor information using GET /api/v1/doctors via fetch + useEffect()
// Maintains 3 core states: data, loading, error
const DoctorsPage = () => {
  // Three states strictly maintained as per Task 4 syllabus
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Search and filter enhancements
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState('All');

  // useEffect - Asynchronous API call upon component mount (Task 4)
  useEffect(() => {
    let isMounted = true;

    const fetchDoctors = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch from Express API
        const response = await fetch('http://localhost:5000/api/v1/doctors');

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status} (${response.statusText})`);
        }

        const result = await response.json();
        if (isMounted) {
          setData(result.data || []);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Unable to connect to the medical API server.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchDoctors();

    return () => {
      isMounted = false;
    };
  }, []);

  // Filtered list
  const filteredDoctors = data.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.specialisation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpec = selectedSpeciality === 'All' || doc.specialisation === selectedSpeciality;
    return matchesSearch && matchesSpec;
  });

  const specialities = ['All', ...new Set(data.map(d => d.specialisation))];

  // 1. Loading State (Task 4 requirement)
  if (loading) {
    return (
      <div className="doctors-page-luxury">
        <div className="page-header-block">
          <span className="section-eyebrow">FACULTY OF MEDICINE</span>
          <h1 className="page-title">Medical Specialists & Consultants</h1>
          <p className="page-subtitle">Fetching accredited medical personnel live from Express API...</p>
        </div>

        {/* Skeleton Grid for Luxury Loading */}
        <div className="skeleton-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton-avatar"></div>
              <div className="skeleton-lines">
                <div className="skeleton-line title"></div>
                <div className="skeleton-line subtitle"></div>
                <div className="skeleton-line badge"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 2. Error State (Task 4 requirement)
  if (error) {
    return (
      <div className="doctors-page-luxury">
        <div className="page-header-block">
          <span className="section-eyebrow">API CONNECTION</span>
          <h1 className="page-title">Medical Faculty Directory</h1>
        </div>

        <div className="error-card-luxury">
          <div className="error-icon-glow">⚠️</div>
          <h3>API Synchronization Failed</h3>
          <p className="error-text-lead">{error}</p>
          <div className="error-debug-tip">
            <span>💡 Troubleshooting:</span> Verify that your Express server is active on <code>http://localhost:5000</code>.
          </div>
          <button onClick={() => window.location.reload()} className="btn-retry">
            Retry Connection 🔄
          </button>
        </div>
      </div>
    );
  }

  // 3. Success State - Data rendered from API response (Task 4 requirement)
  return (
    <div className="doctors-page-luxury">
      <div className="page-header-block">
        <div className="badge-live-api">
          <span className="api-dot"></span> LIVE REST API CONNECTED
        </div>
        <h1 className="page-title">Board-Certified Specialists</h1>
        <p className="page-subtitle">
          Consult with India's foremost healthcare professionals at MedCare Plus. Real-time availability synced from hospital backend.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="search-filter-panel">
        <div className="search-input-box">
          <span className="search-glass-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by doctor name or clinical specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className="clear-btn" onClick={() => setSearchTerm('')}>✕</button>
          )}
        </div>

        <div className="speciality-chips">
          {specialities.map((spec) => (
            <button
              key={spec}
              className={`spec-chip ${selectedSpeciality === spec ? 'active' : ''}`}
              onClick={() => setSelectedSpeciality(spec)}
            >
              {spec}
            </button>
          ))}
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="doctors-luxury-grid">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id || doctor._id} className="doc-card-luxury">
            <div className="doc-top-bar">
              <span className={`availability-indicator ${doctor.available ? 'is-available' : 'is-unavailable'}`}>
                <span className="indicator-dot"></span>
                {doctor.available ? 'Available Today' : 'On Leave'}
              </span>
              <span className="rating-pill">★ 4.9</span>
            </div>

            <div className="doc-body">
              <div className="doc-avatar-luxury">
                <span className="avatar-initials">
                  {doctor.name.replace('Dr. ', '').charAt(0)}
                </span>
                <span className="avatar-glow-ring"></span>
              </div>

              <div className="doc-info-block">
                {/* Doctor Name (Task 4 requirement) */}
                <h3 className="doc-fullname">{doctor.name}</h3>

                {/* Specialisation (Task 4 requirement) */}
                <span className="doc-spec-badge">{doctor.specialisation}</span>

                {doctor.email && (
                  <span className="doc-email-text">✉️ {doctor.email}</span>
                )}
              </div>
            </div>

            <div className="doc-footer-action">
              <Link
                to={`/booking?doctor=${encodeURIComponent(doctor.name)}`}
                className={`btn-book-doc ${!doctor.available ? 'btn-disabled' : ''}`}
              >
                <span>{doctor.available ? 'Schedule Consultation' : 'Doctor Unavailable'}</span>
                {doctor.available && <span>→</span>}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="empty-results-box">
          <p>No specialists found matching "{searchTerm}".</p>
          <button onClick={() => { setSearchTerm(''); setSelectedSpeciality('All'); }} className="btn-reset-filters">
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorsPage;
