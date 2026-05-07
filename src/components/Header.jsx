import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to={isAuthenticated ? "/products" : "/"}>MyApp</Link>
        </div>
        <nav className="header-nav">
          {isAuthenticated ? (
            <>
              <Link to="/products" className="header-link">Products</Link>
              <button onClick={handleLogout} className="header-link logout-btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/" className="header-link">Home</Link>
              <Link to="/about" className="header-link">About</Link>
              <Link to="/services" className="header-link">Services</Link>
              <Link to="/contact" className="header-link">Contact</Link>
              <Link to="/ai" className="header-link">AI</Link>
              <Link to="/login" className="header-link">Login</Link>
              <Link to="/register" className="header-link">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;