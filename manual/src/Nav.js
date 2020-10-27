import React, {useState, useEffect} from 'react';
import { animated, useSpring } from 'react-spring';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './images/Logo.svg';
import { HashLink } from 'react-router-hash-link';

const LogoPlacement = () => {
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

const Nav = () => {
    const [open, setOpen] = useState(false);

    const {scale}  = useSpring({scale: open ? 100 : 1});

    useEffect(() => {
        open && (document.body.style.overflow = 'hidden');
        !open && (document.body.style.overflow = 'unset');
     }, [open]);

    return (
    <div className = "navCircle">
        <animated.div className = "navInner" style ={{scale}}>
        </animated.div>
        <svg onClick = {() => open ? setOpen(false) : setOpen(true)} className = "navButton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
                <title>MenuIcon</title>
                <rect x="137" y="683.5" width="806" height="134" fill="#f4f4f4"/>
                <rect x="137" y="262.5" width="806" height="134" fill="#f4f4f4"/>
        </svg>
    </div>
    
    );
};


export { LogoPlacement, Nav };