import './App.css';
import React from 'react'
import SideBar from './components/sideBar/sideBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Athletes from './pages/Athletes'

function App() {
  return (
    <div className="app">
      <div className="main-layout">
        <BrowserRouter>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="/calendar" element={<h1>Calendar</h1>} />
              <Route path="/sessions" element={<h1>Sessions</h1>} />
              <Route path="/athletes" element={<Athletes/>} />
              <Route path="/user" element={<h1>User</h1>} />
            </Routes>
          </div>
          <SideBar className="sidebar"/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
