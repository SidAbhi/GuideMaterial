import React, {useState, useEffect} from 'react';
import { animated, useSpring, to } from 'react-spring';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/Logo.svg';
import { useHover } from 'react-use-gesture';
import { useMediaQuery } from 'react-responsive';

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
    const {scale} = useSpring({
        scale: open ? 100 : (hoverState === 1 ? 1.6 : 1), 
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

    const linkAnimProps1 = useSpring({
        x: open ? '0em' : '15em', 
        config: {mass: 2}
    });

    const linkAnimProps2 = useSpring({
        x: open ? '0em' : '15em',   
        delay: open ? 100 : 25,
        config: {mass: 2}
    });

    const linkAnimProps3 = useSpring({
        x: open ? '0em' : '15em', 
        delay: open ? 200 : 50,
        config: {mass: 2}
    });

    const linkAnimProps4 = useSpring({
        x: open ? '0em' : '15em', 
        delay: open ? 300: 75,
        config: {mass: 2}
    });

    const linkAnimProps5 = useSpring({
        x: open ? '0em' : '15em', 
        delay: open ? 400 :100,
        config: {mass: 2}
    });


    const svg = to([svgX, svgY, svgZ], (svgX, svgY, svgZ) => `translate(${svgX} ${svgY}) rotate(${svgZ})`);
    const svg2 = to([svg2X, svg2Y, svg2Z], (svg2X, svg2Y, svg2Z) => `translate(${svg2X} ${svg2Y}) rotate(${svg2Z})`);
    const displayNavContent = () => openDelay ? setOpenDelay(false) : setOpenDelay(true);

    const hover = useHover(active => {
        if (!mediaQ) {
            if (open) {
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

    const NavContent = () => {
        return (
            <div className = "nav-content" style = {{display: openDelay ? 'flex' : 'none'}}>
                <ul className = "nav-links">
                    <Link onClick = {onClick} className = "nav-links-list" to = "/">
                        <animated.li style = {linkAnimProps1}>INTRODUCTION</animated.li>
                    </Link>
                    <Link onClick = {onClick} className = "nav-links-list" to = "/sapa">
                        <animated.li style = {linkAnimProps2}>SAPA</animated.li>
                    </Link>
                    <Link onClick = {onClick} className = "nav-links-list" to = "/strengths">
                        <animated.li style = {linkAnimProps3}>STRENGTHS</animated.li>
                    </Link>
                    <Link onClick = {onClick} className = "nav-links-list" to = "/personality">
                        <animated.li style = {linkAnimProps4}>PERSONALITY</animated.li>
                    </Link>
                    <Link onClick = {onClick} className = "nav-links-list" to = "/learn">
                        <animated.li style = {linkAnimProps5}>LEARN MORE</animated.li>
                    </Link>
                </ul>
            </div>
        );
    };

    return (
    <div className = "nav-circle">
        <animated.div className = "nav-inner bg-color-1" style ={{scale}}>
        </animated.div>
        <NavContent />
        <animated.svg onClick = {onClick} {...hover()} className = "nav-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
                <title>MenuIcon</title>
                <animated.rect x="137" y={y} width="806" height="134" transform={svg}  fill={color}/>
                <animated.rect x="137" y={y2} width="806" height="134" transform={svg2} fill={color}/>
        </animated.svg>
    </div>
    
    );
};


export { LogoPlacement, Nav };