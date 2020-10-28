import React, {useState, useEffect} from 'react';
import { animated, useSpring, to, interpolate } from 'react-spring';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './images/Logo.svg';
import { useHover } from 'react-use-gesture';
import { useMediaQuery } from 'react-responsive';
import { HashLink } from 'react-router-hash-link';

const LogoPlacement = () => {
    return (
        <nav className = "top-nav">  
            <Logo className = "logo"/>
        </nav>
    );
};

const Nav = () => {
    const mediaQ = useMediaQuery({ query: '(pointer : coarse)' });
    const [open, setOpen] = useState(false);
    const [openDelay, setOpenDelay] = useState(false);
    const [hoverState, setHoverState] = useState(0);
    const {scale} = useSpring({scale: open ? 100 : (hoverState === 1 ? 1.6 : 1), 
        config: {tension: open ? 170 : 240, 
            friction: open ? 85 : (hoverState === 1 ? 40 : 82), 
            mass: hoverState === 1 ? 1 : 8}});
    const {y} = useSpring({y: open ? 473 : 262.5});
    const {y2} = useSpring({y2: open ? 473 : 683.5});
    const {color} = useSpring({color: hoverState === 2 ? '#192e42' : '#f4f4f4'})
    const {svgX, svgY, svgZ} = useSpring({svgX : open ? -223.7 : 0, 
        svgY : open ? 540 : 0, 
        svgZ: open ? -45 : 0,
    });

    const {svg2X, svg2Y, svg2Z} = useSpring({
        svg2X: open ? 500 : 0, 
        svg2Y: open ? -223.7 : 0, 
        svg2Z: open ? 45 : 0,
    });

    const linkAnimProps = useSpring({
        y: open ? '0em' : '-1em', 
        height: open ? '1.1em' : '0em',  
        opacity: open ? 1 : 0,
        config: {mass: 2}
    });

    const svg = to([svgX, svgY, svgZ], (svgX, svgY, svgZ) => `translate(${svgX} ${svgY}) rotate(${svgZ})`);
    const svg2 = to([svg2X, svg2Y, svg2Z], (svg2X, svg2Y, svg2Z) => `translate(${svg2X} ${svg2Y}) rotate(${svg2Z})`);
    const displayNavContent = () => openDelay ? setOpenDelay(false) : setOpenDelay(true);

    useEffect(() => {
        open && (document.body.style.overflow = 'hidden');
        !open && (document.body.style.overflow = 'unset');
        }, [open]
    );

    const hover = useHover(active => {
        if (!mediaQ) {
            if (open) {
                console.log(active);
                active.hovering ? setHoverState(2) : setHoverState(0);
            } else {
                active.hovering ? setHoverState(1) : setHoverState(0);
            }
        }
    });

    const onClick = () => {
        open ? setOpen(false) : setOpen(true);
        setTimeout(displayNavContent, 200);
    }

    const navContent = () => {
        if (openDelay) {
            return (
                <div className = "navContent">
                    <ul className = "navLinks">
                        <animated.li style = {linkAnimProps}>INTRODUCTION</animated.li>
                        <animated.li style = {linkAnimProps}>STRENGTHS</animated.li>
                        <animated.li style = {linkAnimProps}>PERSONALITY</animated.li>
                        <animated.li style = {linkAnimProps}>LEARN MORE</animated.li>
                    </ul>
                </div>
            );
        } else {
            return (
                null
            );
        };
    };

    return (
    <div className = "navCircle">
        <animated.div className = "navInner" style ={{scale}}>
        </animated.div>
        {navContent()}
        <animated.svg onClick = {onClick} {...hover()} className = "navButton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
                <title>MenuIcon</title>
                <animated.rect x="137" y={y} width="806" height="134" transform={svg}  fill={color}/>
                <animated.rect x="137" y={y2} width="806" height="134" transform={svg2} fill={color}/>
        </animated.svg>
    </div>
    
    );
};


export { LogoPlacement, Nav };