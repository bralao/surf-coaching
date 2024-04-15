import React from 'react';
import './AthleteForm.css'
import { FormControl, TextField, Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const AthleteForm = ({onClose}) => {
  return (
    <div className="athlete-form">

      <div className="top-bar">
        <div/>
        <h1>New Athlete</h1>
        <FontAwesomeIcon className="exit-btn" icon={faCircleXmark} onClick={onClose}/>
      </div>

      <FormControl>
        <TextField
          label="Name"
          fullWidth
          className="form-field"
        />
        <TextField
          label="Email"
          fullWidth
          className="form-field"
        />
        <TextField
          label="Birthdate"
          fullWidth
          className="form-field"
        />
        <TextField
          label="Height"
          fullWidth
          className="form-field"
        />
        <TextField
          label="Weight"
          fullWidth
          className="form-field"
        />
        <Autocomplete
          className="form-field"
          options={['Performance', 'Advanced', 'Intermediate', 'Beginner']}
          renderInput={(params) => (
            <TextField {...params} label="Skill Level" />
          )}
        />
        <TextField
          label="Personal Objective"
          fullWidth
          className="form-field"
        />
        <Button className="submit-btn" variant="contained" color="primary">
          Submit
        </Button>
      </FormControl>
    </div>
  );
};

export default AthleteForm;
