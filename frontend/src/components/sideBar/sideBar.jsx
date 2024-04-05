import React from 'react'
import './sideBar.css'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendarDays, faClipboard, faUser } from '@fortawesome/free-solid-svg-icons';


const sideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="" />
      </div>
      <div className="sidebar-icons">
        <FontAwesomeIcon icon={faHouse} className="sidebar-fa-icon"/>
        <FontAwesomeIcon icon={faCalendarDays} className="sidebar-fa-icon"/>
        <FontAwesomeIcon icon={faClipboard} className="sidebar-fa-icon"/>
        <FontAwesomeIcon icon={faUser} className="sidebar-fa-icon"/>
      </div>
    </div>
  )
}

export default sideBar
