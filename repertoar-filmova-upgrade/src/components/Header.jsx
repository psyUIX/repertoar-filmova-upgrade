import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Početna' },
    { to: '/movies', label: 'Repertoar' },
    { to: '/about', label: 'O aplikaciji' },
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-icon">🎬</span>
          <span className="logo-text">CinemaApp</span>
        </div>
        <nav className="nav">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;