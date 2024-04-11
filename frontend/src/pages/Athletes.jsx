import React, { useState, useEffect } from 'react';
import './styles/Athletes.css';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Athletes = () => {

  const [skillLevel, setSkillLevel] = useState('All Levels');
  const [searchQuery, setSearchQuery] = useState(null);
  const [athleteData, setAthleteData] = useState([]);

  const handleSkillLevelChange = (event) => {
    setSkillLevel(event.target.value); // sets the state
  };

  useEffect(() => {
    const fetchAthleteData = async () => {
      try {
        const response = await fetch('/athletes.json'); // fetch the athletes data from the jsonfile
        const data = await response.json(); // convert the response to json
        setAthleteData(data); // set the athlete data to the data we fetched
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchAthleteData();
  }, []);

  const filteredAthletes = skillLevel !== 'All Levels' // if skillLevel is not 'All Levels', filter the athletes by skill level
  ? athleteData.filter(athlete => athlete.skillLevel === skillLevel) // filter the athletes by skill level
  : athleteData; // if skillLevel is 'All Levels', show all athletes

  return (
    <div className="athletes">

      <div className="athletes-top-bar">

        <div className="title">
          <h1>Athletes</h1>
        </div>

        <div className="athletes-navbar">
          <Box className="search-filter" sx={{ minWidth: 170 }}>
            <Autocomplete
              disablePortal
              id="athlete-search"
              options={["Miguel", "Beatriz"]}
              value={searchQuery}
              onChange={(event, newValue) => {
                setSearchQuery(newValue);
              }}
              renderInput={(params) => <TextField {...params} label="Search by name" />}
            />
          </Box>
          <Box className="skill-filter" sx={{ minWidth: 140 }}>
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
          <FontAwesomeIcon icon={faPlus} className="add-btn" />
        </div>
      </div>

      <div className="current-archive-filter">
        <button className="current-btn">Current</button>
        <button className="archive-btn">Archive</button>
      </div>

      <div className="athlete-list">
        {filteredAthletes.map((athlete, index) => (
          <Link to={`/athletes/${athlete.id}`}>
            <div className="athlete-item" key={index}>
              <img src={athlete.photo} alt="athlete" />
              <p>{athlete.name}</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Athletes;
