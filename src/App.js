import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Home from './Home'; // Logged-in area

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> {/* Landing page */}
        <Route path="/home" element={<Home />} /> {/* Logged-in area */}
      </Routes>
    </Router>
  );
}

export default App;
