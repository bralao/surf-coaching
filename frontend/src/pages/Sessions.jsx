import React, { useState, useEffect } from 'react'
import './styles/Sessions.css';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SessionForm from '../components/sessionForm/SessionForm.jsx';

const Sessions = () => {
  const [sessionData, setSessionData] = useState([]);
  const [skillLevel, setSkillLevel] = useState('All Levels');
  const [searchQuery, setSearchQuery] = useState(null);
  const [athleteData, setAthleteData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        const response = await fetch('/sessions.json'); // fetch the athletes data from the jsonfile
        const data = await response.json(); // convert the response to json
        setSessionData(data); // set the athlete data to the data we fetched
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchSessionData();
  }, []);

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

  const filterByName = (athlete) => {
    if (!searchQuery) return true;
    return athlete.name.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const filteredAthletes = athleteData.filter && sessionData.filter(
    (athlete) =>
      (skillLevel === 'All Levels' || athlete.skillLevel === skillLevel) &&
      filterByName(athlete)
  );


  return (
    <div className="sessions">
      <div className="sessions-top-bar">

        <div className="title">
          <h1>Sessions</h1>
        </div>

        <div className="sessions-navbar">
          <Box className="search-filter" sx={{ minWidth: 170 }}>
            <Autocomplete
              disablePortal
              id="athlete-search"
              options={athleteData.map((athlete) => athlete.name)}
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
          <FontAwesomeIcon icon={faCirclePlus} className="add-session-btn" onClick={handleOpenForm}/>
        </div>
      </div>

      <div className="session-list">
        {filteredAthletes.map((session, index) => (
          <Link to={`/session/${session.id}`} key={session.id}>
            <div className="session-item">
              <div className="session-info">
                <p>{session.date} at {session.startTime}</p>
                <p>Location: {session.location}</p>
              </div>
              <div className="athlete-list">
                {session.athletes.map((athlete) => (
                  <p className="athlete-name" key={athlete.id}>{athlete.name}</p>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <SessionForm onClose={handleCloseForm}/>
          </div>
        </div>
      )}


    </div>
  )
}

export default Sessions
