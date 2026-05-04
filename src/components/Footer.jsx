import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/mdzawaralam',
      icon: '📘',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/mdzawaralam',
      icon: '𝕏',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/mdzawaralam',
      icon: '💼',
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>MyApp</h3>
          <p>Your trusted application for all needs.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={social.name}
              >
                <span className="social-icon">{social.icon}</span>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;