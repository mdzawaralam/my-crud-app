import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to MyApp</h1>
      <p className="home-subtitle">Your trusted application for all needs</p>
      <div className="home-actions">
        <Link to="/login" className="home-btn primary">Login</Link>
        <Link to="/register" className="home-btn secondary">Register</Link>
      </div>
      <div className="home-features">
        <div className="feature-card">
          <h3>Easy to Use</h3>
          <p>Simple and intuitive interface</p>
        </div>
        <div className="feature-card">
          <h3>Secure</h3>
          <p>Your data is safe with us</p>
        </div>
        <div className="feature-card">
          <h3>Fast</h3>
          <p>Quick and responsive experience</p>
        </div>
      </div>
    </div>
  );
}

export default Home;