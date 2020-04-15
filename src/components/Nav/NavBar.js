import React from 'react';
import './NavBar.css';

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span>StoryBuilder</span>
      </div>
      <ul class="nav">
        <li>My Stories</li>
      </ul>
    </div>
  );
};

export default NavBar;
