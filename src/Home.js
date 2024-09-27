import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userName = params.get('name');  // Get the 'name' parameter from the URL
    if (userName) {
      setUser({ name: userName });
    } else {
      window.location.href = '/';  // Redirect back to login if no user name found
    }
  }, [location]);

  return user ? (
    <div className="home-container">
      <header className="home-header">
        <nav className="top-nav">
          <div className="nav-left">
            <h1 className="nav-title">Bird's Eye</h1>
          </div>
          <div className="nav-right">
            <button className="logout-button" onClick={() => window.location.href = 'http://localhost:3001/logout'}>Logout</button>
          </div>
        </nav>

        <h1 className="home-title">Welcome, {user.name}!</h1>
        <p className="home-subtitle">You're now logged in. Enjoy the Bird's Eye view!</p>
      </header>

      <footer className="home-footer">
        <p>&copy; 2024 Bird's Eye. All rights reserved.</p>
        <p>
          <a href="/" className="footer-link">Privacy</a> · 
          <a href="/" className="footer-link">Terms</a> · 
          <a href="/" className="footer-link">Contact Us</a>
        </p>
      </footer>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Home;
