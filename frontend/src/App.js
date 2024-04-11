import './App.css';
import React from 'react'
import Navbar from './components/navbar/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Overview from './pages/Overview'
import Calendar from './pages/Calendar'
import Sessions from './pages/Sessions'
import Athletes from './pages/Athletes'
import User from './pages/User'
import AthleteProfile from './components/athleteProfile/AthleteProfile'


function App() {
  return (
    <div className="app">
      <div className="main-layout">
        <BrowserRouter>
          <div className="main-content">
            <Routes>
              <Route exact path="/" element={<Overview/>} />
              <Route path="/calendar" element={<Calendar/>} />
              <Route path="/sessions" element={<Sessions/>} />
              <Route path="/athletes" element={<Athletes/>} />
              <Route path="/user" element={<User/>} />

              <Route path="/athletes/:id" element={<AthleteProfile/>} />
            </Routes>
          </div>
          <Navbar className="navbar"/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
