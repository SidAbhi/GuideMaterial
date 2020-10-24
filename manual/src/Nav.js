import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './images/Logo.svg';
import { HashLink } from 'react-router-hash-link';

const Nav = () => {
    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -350; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <nav className = "top-nav">  
            <Logo className = "logo"/>
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
                <li>Profile</li>
            </Link>
        </ul>
    </nav>
    )
};


export { Nav, SideNav };