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
        <Link to="/">
          <FontAwesomeIcon
            icon={faHouse}
            className={`sidebar-icon ${selectedIcon === 'home' ? 'selected' : ''}`}
            onClick={() => setSelectedIcon('home')}
          />
        </Link>
        <Link to="/calendar">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className={`sidebar-icon ${selectedIcon === 'calendar' ? 'selected' : ''}`}
            onClick={() => setSelectedIcon('calendar')}
          />
        </Link>
        <Link to="/sessions">
          <FontAwesomeIcon
            icon={faClipboard}
            className={`sidebar-icon ${selectedIcon === 'sessions' ? 'selected' : ''}`}
            onClick={() => setSelectedIcon('sessions')}
          />
        </Link>
        <Link to="/athletes">
          <FontAwesomeIcon
            icon={faUsers}
            className={`sidebar-icon ${selectedIcon === 'athletes' ? 'selected' : ''}`}
            onClick={() => setSelectedIcon('athletes')}
          />
        </Link>
        <Link to="/user">
          <FontAwesomeIcon
            icon={faUser}
            className={`sidebar-icon ${selectedIcon === 'user' ? 'selected' : ''}`}
            onClick={() => setSelectedIcon('user')}
          />
        </Link>
      </div>
    </div>
  )
}

export default SideBar
