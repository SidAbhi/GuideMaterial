import React, {useState, useEffect} from 'react';
import { animated, useSpring, to, interpolate } from 'react-spring';
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

    const {scale} = useSpring({scale: open ? 100 : 1});

    const {svgX, svgY, svgZ} = useSpring({svgX : open ? -223.7 : 0, 
        svgY : open ? 540 : 0, 
        svgZ: open ? -45 : 0,
    });

    const {y} = useSpring({y : open ? 473 : 262.5});

    const {svg2X, svg2Y, svg2Z} = useSpring({svg2X : open ? 540 : 0, 
        svg2Y : open ? -223.7 : 0, 
        svg2Z: open ? 45 : 0,
    });

    const svg = to([svgX, svgY, svgZ], (svgX, svgY, svgZ) => `translate(${svgX} ${svgY}) rotate(${svgZ})`);

    const svg2 = to([svg2X, svg2Y, svg2Z], (svg2X, svg2Y, svg2Z) => `translate(${svg2X} ${svg2Y}) rotate(${svg2Z})`);

    const {y2} = useSpring({y2 : open ? 473 : 683.5});

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
                <animated.rect x="137" y={y} width="806" height="134" transform={svg}  fill="#f4f4f4"/>
                <animated.rect x="137" y={y2} width="806" height="134" transform={svg2} fill="#f4f4f4"/>
        </svg>
    </div>
    
    );
};


export { LogoPlacement, Nav };