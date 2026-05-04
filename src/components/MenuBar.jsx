import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './MenuBar.css';

function MenuBar() {
  const { isAuthenticated } = useAuth();
  
  const publicMenuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const privateMenuItems = [
    { path: '/products', label: 'Products' },
  ];

  const menuItems = isAuthenticated ? privateMenuItems : publicMenuItems;

  return (
    <nav className="menubar">
      <div className="menubar-container">
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.path} className="menu-item">
              <Link to={item.path} className="menu-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default MenuBar;