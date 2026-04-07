import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>RnR Wellness</h3>
          <p>Rest and Restore</p>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📞 +254 799 459 844</p>
          <p>✉️ info@rnrwellness.com</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://instagram.com/rnrwellnesske" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://tiktok.com/@rnrwellness" target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 RnR Wellness Program. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;