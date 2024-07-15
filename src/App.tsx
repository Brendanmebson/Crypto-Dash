import React from 'react';
import { Routes, Route,} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profilesettings/Profile';
import Navbar from './components/Navbar';
import Withdraw from './pages/Withdraw';

const App: React.FC = () => (
  <div className="min-h-screen bg-gray-100">
    <Navbar/>
    <Routes>
      <Route path="/Dashboard" element={ <Dashboard />} />
      <Route path="/" element={ <Dashboard />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Withdraw" element={<Withdraw />} />
    </Routes>
  </div>
);

export default App;