import React, { useState, useEffect } from 'react';
import './AthleteForm.css';
import { FormControl, TextField, Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const AthleteForm = ({ onClose, defaultValues, editMode }) => {
  const [formData, setFormData] = useState(defaultValues || {});

  // Update form data when default values change
  useEffect(() => {
    setFormData(defaultValues || {});
  }, [defaultValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission here
  };

  return (
    <div className="athlete-form">
      <div className="top-bar">
        <div />
        <h1>{editMode ? 'Edit Athlete' : 'New Athlete'}</h1> {/* rendering the title in a conditional way. Passed editMode value throught props from AthleteProfile to now its "Edit Athlete" instead of "New Athlete" */}
        <FontAwesomeIcon className="exit-btn" icon={faCircleXmark} onClick={onClose} />
      </div>

      <FormControl>
        <TextField
          label="Name"
          fullWidth
          className="form-field"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          fullWidth
          className="form-field"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
        />
        <TextField
          label="Birthdate"
          fullWidth
          className="form-field"
          name="birthdate"
          value={formData.birthdate || ''}
          onChange={handleChange}
        />
        <TextField
          label="Height"
          fullWidth
          className="form-field"
          name="height"
          value={formData.height || ''}
          onChange={handleChange}
        />
        <TextField
          label="Weight"
          fullWidth
          className="form-field"
          name="weight"
          value={formData.weight || ''}
          onChange={handleChange}
        />
        <Autocomplete
          className="form-field"
          options={['Performance', 'Advanced', 'Intermediate', 'Beginner']}
          value={formData.skillLevel || ''} // Set the initial value based on the formData state
          onChange={(event, value) => setFormData({ ...formData, skillLevel: value })} // Update the formData state when the value changes
          renderInput={(params) => <TextField {...params} label="Skill Level" />} // Render the input field
        />
        <TextField
          label="Personal Objective"
          fullWidth
          className="form-field"
          name="personalObjective"
          value={formData.personalObjective || ''}
          onChange={handleChange}
        />
        <Button className="submit-btn" variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
    </div>
  );
};

export default AthleteForm;
