import React from 'react';
import './Login.css';

const Login = () => (
  <div className="login-container">
    <header className="header">
      <h1 className="header-title">Bird's Eye</h1>
      <p className="header-subtitle">Quickly sift through content—overview or detail, your choice</p>
    </header>
    <div className="login-box">
      <h1 className="login-title">Let's get you started</h1>
      <a href="http://localhost:3001/auth/google">
        <button className="login-button">Continue with Google</button>
      </a>
    </div>
    <footer className="footer">
      <p>&copy; 2024 Bird's Eye. All rights reserved.</p>
      <p>
        <a href="/" className="footer-link">Privacy</a> · 
        <a href="/" className="footer-link">Terms</a> · 
        <a href="/" className="footer-link">Contact Us</a>
      </p>
    </footer>
  </div>
);

export default Login;
