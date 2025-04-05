import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import FoundersTeam from './pages/FoundersTeam';
import Mentor from './pages/Mentor';
import Investor from './pages/Investor';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Jobs from './pages/Jobs';
import Dashboard from './pages/Dashboard';
import ChatWidget from './components/ChatWidget';
import NavigationMenu from './components/NavigationMenu';

function App() {
  return (
    <>
      <NavigationMenu />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/founders-team" element={<FoundersTeam />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Dashboard />} />
          <Route path="/my-startup" element={<Dashboard />} />
          <Route path="/mentees" element={<Dashboard />} />
          <Route path="/investments" element={<Dashboard />} />
        </Routes>
      </div>
      <ChatWidget />
    </>
  );
}

export default App;
