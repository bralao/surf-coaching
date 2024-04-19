import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AthleteProfile = () => {
  const { id } = useParams();
  const [athlete, setAthlete] = useState(null);
  const [activeTab, setActiveTab] = useState('profile'); // Default to 'profile'

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

  return (
    <div className="athlete-profile">
      <div className="athlete-title">
        <h2>{athlete && athlete.name}</h2>
      </div>
      <div className="athlete-navbar">
        <button onClick={() => handleTabChange('profile')}>Profile</button>
        <button onClick={() => handleTabChange('stats')}>Stats</button>
        <button onClick={() => handleTabChange('sessions')}>Sessions</button>
        <button onClick={() => handleTabChange('competitions')}>Competitions</button>
      </div>
      {athlete && (
        <>
          {activeTab === 'profile' && (
            <div>
              <img src={athlete.photo} alt={athlete.name} />
              <p>{athlete.skillLevel}</p>
              <hr/>
              <p>{athlete.email}</p>
              <p>{athlete.phone}</p>
              <p>{athlete.birthdate}</p>
              <p>{athlete.height} cm</p>
              <p>{athlete.weight} kg</p>

            </div>
          )}
          {activeTab === 'stats' && (
            <div>
              <p>{athlete.personalObjective}</p>
              <p>{athlete.monthObjective}</p>
              <p>{athlete.threeMonthsObjective}</p>
              <p>{athlete.averageWavesPerSession}</p>
            </div>
          )}
          {activeTab === 'sessions' && (
            <div>
              <p>{athlete.sessionsCompleted}</p>
              <p>{athlete.sessionsMissed}</p>
            </div>
          )}
          {activeTab === 'competitions' && (
            <div>
              competitions scheduled / completed
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AthleteProfile;
