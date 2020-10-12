import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className = "top-nav">  
      <h3>Manual SAPA</h3>    
      <ul className = "nav-links">
        <Link to = "./">
          <li>App</li>
        </Link>
        <Link to = "./profile">
          <li>Profile</li>
        </Link>
      </ul>
    </nav>
  );
};

const SideNav = () => {
  return (
    <nav className = "side-nav">     
    <ul className = "side-nav-links">
      <Link to = "./">
        <li>Latar Belakang</li>
      </Link>
      <Link to = "./profile">
        <li>Teori</li>
      </Link>
    </ul>
  </nav>
  )
};

export { Nav, SideNav };