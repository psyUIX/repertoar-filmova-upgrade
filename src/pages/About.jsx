import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './About.css';

function About() {
  const location = useLocation();

  return (
    <div className="about">
      <h1>O aplikaciji</h1>
      <p className="about-intro">Izaberite šta vas zanima:</p>
      <nav className="about-nav">
        <Link
          to="/about/app"
          className={`about-link ${location.pathname === '/about/app' ? 'active' : ''}`}
        >
          O aplikaciji
        </Link>
        <Link
          to="/about/author"
          className={`about-link ${location.pathname === '/about/author' ? 'active' : ''}`}
        >
          O autoru
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default About;