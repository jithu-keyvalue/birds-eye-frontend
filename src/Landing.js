import React from 'react';
import './Landing.css';
import mainImage from './main.png'; // Using the main.png image

const Landing = () => {
  const handleScrollToFeatures = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: document.querySelector('#features').offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="landing-container">
      <header className="landing-header">
        <nav className="top-nav">
          <div className="nav-left">
            <h1 className="nav-title">Bird's Eye</h1>
          </div>
          <div className="nav-right">
            <a href="#features" onClick={handleScrollToFeatures}>Features</a>
            <a href="#pricing">Pricing</a>
            <a href="/" className="cta-nav-button">Add to browser for free</a>
          </div>
        </nav>

        <img src={mainImage} alt="Bird's Eye Main" className="main-image" />

        <h1 className="landing-title">Cut through the noise. Focus on what matters.</h1>
        <p className="landing-subtitle">Browser extension to quickly sift through web content—overview or detail, your choice.</p>

        <div className="cta-buttons">
          <a href="http://localhost:3001/auth/google" className="cta-button">Continue with Google</a>
          <a href="#features" className="cta-button secondary" onClick={handleScrollToFeatures}>Learn More</a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2 className="section-title">Why Choose Bird's Eye?</h2>
        <div className="features-cards">
          <div className="feature-card">
            <h3>Zoom Control</h3>
            <p>Easily adjust the level of detail with Shift + Scroll. Zoom out for overviews or zoom in for detailed information—all on the same page.</p>
          </div>
          <div className="feature-card">
            <h3>Language Styles</h3>
            <p>Toggle between different language styles (technical, simplified, advanced) to ensure you’re reading content that fits your understanding level.</p>
          </div>
          <div className="feature-card">
            <h3>Efficient Navigation</h3>
            <p>Reduce the time spent on irrelevant content. Quickly determine if a page is useful by shifting between detailed views and summaries.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <h2 className="section-title">Choose Your Plan</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3 className="plan-name">Finch</h3> {/* Free plan */}
            <ul>
              <li>Bird's Eye view with Dive/Rise gestures</li>
              <li>15 pages/month</li>
            </ul>
            <p className="price">Free</p>
          </div>

          <div className="pricing-card">
            <h3 className="plan-name">Hawk</h3> {/* Professional plan */}
            <ul>
              <li>Bird's Eye view with Dive/Rise gestures</li>
              <li>100 pages/month</li>
              <li>3 modes</li>
            </ul>
            <p className="price">$9.99/month</p>
          </div>

          <div className="pricing-card">
            <h3 className="plan-name">Falcon</h3> {/* Advanced plan */}
            <ul>
              <li>Bird's Eye view with Dive/Rise gestures</li>
              <li>300 pages/month</li>
              <li>10 modes + custom mode</li>
            </ul>
            <p className="price">$19.99/month</p>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <p>&copy; 2024 Bird's Eye. All rights reserved.</p>
        <p>
          <a href="/" className="footer-link">Privacy</a> · 
          <a href="/" className="footer-link">Terms</a> · 
          <a href="/" className="footer-link">Contact Us</a>
        </p>
      </footer>
    </div>
  );
};

export default Landing;
