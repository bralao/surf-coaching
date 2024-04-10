import React, { useState, useEffect } from 'react';
import './styles/Athletes.css';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
/* import AthleteProfile from '../components/athleteprofile/AthleteProfile'; // Import the child component
 */
const Athletes = () => {
  const [skillLevel, setSkillLevel] = useState('All Levels');
  const [searchQuery, setSearchQuery] = useState(null);
  const [athleteData, setAthleteData] = useState([]);

  const handleSkillLevelChange = (event) => {
    setSkillLevel(event.target.value);
  };

  useEffect(() => {
    const fetchAthleteData = async () => {
      try {
        const response = await fetch('/athletes.json');
        const data = await response.json();
        setAthleteData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchAthleteData();
  }, []);

  const filteredAthletes = skillLevel !== 'All Levels'
  ? athleteData.filter(athlete => athlete.skillLevel === skillLevel)
  : athleteData;

  return (
    <div className="athletes">

      <div className="athletes-top-bar">

        <div className="title">
          <h1>Athletes</h1>
        </div>

        <div className="athletes-navbar">
          <Box sx={{ minWidth: 140 }}>
            <TextField
              select
              label="Skill Level"
              value={skillLevel}
              onChange={handleSkillLevelChange}
              fullWidth
            >
              <MenuItem value="All Levels">All Levels</MenuItem>
              <MenuItem value="Performance">Performance</MenuItem>
              <MenuItem value="Advanced">Advanced</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Beginner">Beginner</MenuItem>
            </TextField>
          </Box>
          <Box className="search-name-box" sx={{ width: 170 }}>
            <Autocomplete
              disablePortal
              id="athlete-search"
              options={["Miguel", "Beatriz"]}
              value={searchQuery}
              onChange={(event, newValue) => {
                setSearchQuery(newValue);
              }}
              renderInput={(params) => <TextField {...params} label="Search" />}
            />
          </Box>
          <FontAwesomeIcon icon={faPlus} className="add-btn" />
        </div>
      </div>

      <div className="current-archive-filter">
        <button className="current-btn">Current</button>
        <button className="archive-btn">Archive</button>
      </div>

      <div className="athlete-list">
        {filteredAthletes.map((athlete, index) => (
          <div className="athlete-item" key={index}>
            <img src={athlete.photo} alt="athlete" />
            <p>{athlete.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Athletes;
