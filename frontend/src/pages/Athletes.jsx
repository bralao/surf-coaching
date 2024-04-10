import React, { useState, useEffect } from 'react';
import './styles/Athletes.css';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBoxArchive } from '@fortawesome/free-solid-svg-icons';
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
          <Box sx={{ minWidth: 180 }}>
            <TextField
              select
              label="Skill Level"
              value={skillLevel}
              onChange={handleSkillLevelChange}
              fullWidth
            >
              <MenuItem value="All Levels">All Levels</MenuItem>
              <MenuItem value="High Performance">High Performance</MenuItem>
              <MenuItem value="Advanced">Advanced</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
            </TextField>
          </Box>
          <Box sx={{ width: 180 }}>
            <Autocomplete
              disablePortal
              id="athlete-search"
              options={["Miguel", "Beatriz"]}
              value={searchQuery}
              onChange={(event, newValue) => {
                setSearchQuery(newValue);
              }}
              renderInput={(params) => <TextField {...params} label="Surfer Name" />}
            />
          </Box>
        </div>

        <div className="title-bar-icons">
          <FontAwesomeIcon icon={faPlus} className="add-btn" />
          <FontAwesomeIcon icon={faBoxArchive} className="archive-btn" />
        </div>



      </div>

      <div className="athlete-list">
        {filteredAthletes.map((athlete, index) => (
          <div className="athlete-item" key={index}>
            <p>{athlete.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Athletes;
