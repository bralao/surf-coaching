import React, { useEffect, useState } from 'react'
import './sideBar.css'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendarDays, faClipboard, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'


const SideBar = () => {

  const [selectedIcon, setSelectedIcon] = useState('home');

  useEffect(() => {
    setSelectedIcon('home')
  },[]);

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="" />
      </div>
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
          className={`sidebar-icon ${selectedIcon === 'clipboard' ? 'selected' : ''}`}
          onClick={() => setSelectedIcon('clipboard')}
        />
        <Link to="/profiles">
          <FontAwesomeIcon
            icon={faUser}
            className={`sidebar-icon ${selectedIcon === 'profiles' ? 'selected' : ''}`}
            onClick={() => setSelectedIcon('profiles')}
          />
        </Link>
      </div>
    </div>
  )
}

export default SideBar
