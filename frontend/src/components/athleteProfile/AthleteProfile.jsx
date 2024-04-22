import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AthleteProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const AthleteProfile = () => {
  const { id } = useParams();
  const [athlete, setAthlete] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAthlete = async () => {
      try {
        const response = await fetch(`/athletes.json`);
        const data = await response.json();
        const foundAthlete = data.find((athlete) => athlete.id === parseInt(id));
        setAthlete(foundAthlete);
      } catch (error) {
        console.error('Error fetching athlete data:', error);
      }
    };
    fetchAthlete();
  }, [id]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };


// to display the current month in the Monthly Objective
const currentDate = new Date();
const currentMonth = currentDate.toLocaleString('default', { month: 'long' });




  return (
    <div className="athlete">

      <div className="athlete-top">
        <FontAwesomeIcon icon={faCircleChevronLeft} className="back-btn" onClick={() => navigate(-1)} />
        <h2>{athlete && athlete.name}</h2>
        <FontAwesomeIcon icon={faUserPen} className="edit-btn" onClick="" />
      </div>

      <div className="athlete-navbar">
        <button onClick={() => handleTabChange('profile')}>Profile</button>
        <button onClick={() => handleTabChange('objectives')}>Objectives</button>
        <button onClick={() => handleTabChange('sessions')}>Sessions</button>
        <button onClick={() => handleTabChange('competitions')}>Competitions</button>
      </div>
      {athlete && (
        <>
          {activeTab === 'profile' && (
            <div className="athlete-profile">
              <img src={athlete.photo} alt={athlete.name} className="athlete-photo"/>
              <p>Level: {athlete.skillLevel}</p>
              <p>Email: {athlete.email}</p>
              <p>Phone: {athlete.phone}</p>
              <p>Birthdate: {athlete.birthdate}</p>
              <p>Height: {athlete.height} cm</p>
              <p>Weight {athlete.weight} kg</p>
              <p>Surfboards Log</p>
            </div>
          )}
          {activeTab === 'objectives' && (
            <div>
              <p>Personal: {athlete.personalObjective}</p>
              <p><b>{currentMonth}</b> Objective: {athlete.monthObjective}</p>
              <p>Next Three Months: {athlete.threeMonthsObjective}</p>
            </div>
          )}
          {activeTab === 'sessions' && (
            <div>
              <p>show scheduled sessions here</p>
              <hr/>
              <p>Completed: {athlete.sessionsCompleted}</p>
              <p>Missed{athlete.sessionsMissed}</p>
              <hr/>
              <p>Average waves per session {athlete.averageWavesPerSession}</p>
            </div>
          )}
          {activeTab === 'competitions' && (
            <div>
              <p>show scheduled sessions here</p>
              <hr/>

            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AthleteProfile;
