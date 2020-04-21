import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = ({ setIsLoggedIn, isLoggedIn }) => {
  const logout = (e) => {
    localStorage.clear('token');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="navbar">
      <div className="logo">
        <span>
          <Link to="/stories">StoryBuilder</Link>
        </span>
      </div>
      <ul className="nav">
        {isLoggedIn ? (
          <li>
            <a onClick={logout}>Logout</a>
          </li>
        ) : (
          <li>
            <a href="/login">Login</a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
