import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './SessionForm.css';
import { FormControl, TextField, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const SessionForm = ({ onClose }) => { // Correct function name to PascalCase
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState('set-up');

  useEffect(() => {
    setFormData({});
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const startSession = () => {
    // Handle form submission here
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="session-form">

      <div className="top-bar">
        <div/>
        <h1>Starting a new Session</h1>
        <FontAwesomeIcon className="exit-btn" icon={faCircleXmark} onClick={onClose} />
      </div>

      <div className="session-navbar">
        <div className="rounds-info">
          <button onClick={() => handleTabChange('set-up')}>Set Up</button>
          <button onClick={() => handleTabChange('overview')}>Overview</button>
        </div>
        <div className="rounds">
          <button onClick={() => handleTabChange('round-1')}>Round 1</button>
          <button onClick={() => handleTabChange('round-2')}>Round 2</button>
          <button className="add-round">+</button>
        </div>
      </div>


      { activeTab === 'set-up' && (
        <FormControl>
          <TextField
            label="Date"
            fullWidth
            className="form-field"
            name="date"
            value={formData.date || ''}
            onChange={handleChange}
          />
          <TextField
            label="Start Time"
            fullWidth
            className="form-field"
            name="startTime"
            value={formData.startTime || ''}
            onChange={handleChange}
          />
          <TextField
            label="Location"
            fullWidth
            className="form-field"
            name="location"
            value={formData.location || ''}
            onChange={handleChange}
          />
          <TextField
            label="Describe Conditions"
            fullWidth
            className="form-field"
            name="description"
            value={formData.description || ''}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" onClick={startSession}>
            Start Session
          </Button>
        </FormControl>
      )}

      { activeTab === 'round-1' && (
        <FormControl>
          <TextField
            label="Round 1"
            fullWidth
            className="form-field"
            name="round1"
            value={formData.round1 || ''}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" onClick={startSession}>
            Save Round 1
          </Button>
        </FormControl>
      )}


    </div>
  );
};

export default SessionForm;
