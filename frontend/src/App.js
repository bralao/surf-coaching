import './App.css';
import React from 'react'
import SideBar from './components/sideBar/sideBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profiles from './pages/Profiles'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <SideBar className="sidebar"/>
        <div className="routes">
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/calendar" element={<h1>Calendar</h1>} />
            <Route path="/sessions" element={<h1>Sessions</h1>} />
            <Route path="/profiles" element={<Profiles/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
