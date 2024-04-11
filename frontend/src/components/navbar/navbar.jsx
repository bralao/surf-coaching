import React, { useState } from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendarDays, faClipboard, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'


const Navbar = () => {

  const [selectedIcon, setSelectedIcon] = useState('home');


  return (
    <div className="navbar">
      <div className="navbar-icons">
        <Link to="/">
          <FontAwesomeIcon
            icon={faHouse}
            className={`navbar-icon ${selectedIcon === 'home' ? 'selected' : ''}`}
            onClick={() => setSelectedIcon('home')}
          />
        </Link>
        <Link to="/calendar">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className={`navbar-icon ${selectedIcon === 'calendar' ? 'selected' : ''}`}
            onClick={() => setSelectedIcon('calendar')}
          />
        </Link>
        <Link to="/sessions">
          <FontAwesomeIcon
            icon={faClipboard}
            className={`navbar-icon ${selectedIcon === 'sessions' ? 'selected' : ''}`}
            onClick={() => setSelectedIcon('sessions')}
          />
        </Link>
        <Link to="/athletes">
          <FontAwesomeIcon
            icon={faUsers}
            className={`navbar-icon ${selectedIcon === 'athletes' ? 'selected' : ''}`}
            onClick={() => setSelectedIcon('athletes')}
          />
        </Link>
        <Link to="/user">
          <FontAwesomeIcon
            icon={faUser}
            className={`navbar-icon ${selectedIcon === 'user' ? 'selected' : ''}`}
            onClick={() => setSelectedIcon('user')}
          />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
