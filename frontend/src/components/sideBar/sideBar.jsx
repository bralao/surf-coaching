import React, { useState } from 'react'
import './sideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendarDays, faClipboard, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'


const SideBar = () => {

  const [selectedIcon, setSelectedIcon] = useState('home');


  return (
    <div className="sidebar">
      <div className="sidebar-icons">
        <FontAwesomeIcon
          icon={faHouse}
          className={`sidebar-icon ${selectedIcon === 'home' ? 'selected' : ''}`}
          onClick={() => setSelectedIcon('home')}
        />
        <FontAwesomeIcon
          icon={faCalendarDays}
          className={`sidebar-icon ${selectedIcon === 'calendar' ? 'selected' : ''}`}
          onClick={() => setSelectedIcon('calendar')}
        />
        <FontAwesomeIcon
          icon={faClipboard}
          className={`sidebar-icon ${selectedIcon === 'sessions' ? 'selected' : ''}`}
          onClick={() => setSelectedIcon('sessions')}
        />
        <Link to="/athletes">
          <FontAwesomeIcon
            icon={faUsers}
            className={`sidebar-icon ${selectedIcon === 'athletes' ? 'selected' : ''}`}
            onClick={() => setSelectedIcon('athletes')}
          />
        </Link>
        <FontAwesomeIcon
          icon={faUser}
          className={`sidebar-icon ${selectedIcon === 'user' ? 'selected' : ''}`}
          onClick={() => setSelectedIcon('user')}
        />
      </div>
    </div>
  )
}

export default SideBar
