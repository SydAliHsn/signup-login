import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) props.logoutHandler();
  }, [isLoggedIn]);

  return (
    <div className="ui menu">
      <Link to="/" className="header item" style={{ fontSize: '1.4rem' }}>
        Our Company
      </Link>

      <Link to="/about" className="item" style={{ fontSize: '1.3rem' }}>
        About
      </Link>
      <Link to="/contact" className="item" style={{ fontSize: '1.3rem' }}>
        Contact
      </Link>

      <div
        onClick={() => setIsLoggedIn(false)}
        className="item right"
        style={{ fontSize: '1.3rem', cursor: 'pointer' }}
      >
        Logout
      </div>
    </div>
  );
};

export default Nav;
