import React from "react";
import { Parallax } from 'react-scroll-parallax';
import { Svganim1, Svganim2, Svganim3 } from './Svganim1';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as BG2 } from './images/ManualIllust1.svg';
import { ReactComponent as DataIllust} from './images/Data1.svg';
import { animated, useSpring, interpolate } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import { ReactComponent as BG3} from './images/BG2.svg';
import { ReactComponent as BG1} from './images/BG1.svg';

const MainImg = () => {
    const mediaQ = useMediaQuery({ query: '(max-width: 770px), (max-aspect-ratio: 1/1)' });

    const styleBotAlign = () => {
        return (
            {
                display: 'grid',
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '100%',
                height: '100vh',
                alignContent: 'end',
            }
        );
    }

    const styleBotAlign2 = (x) => {
        if (mediaQ) {
            return (
                {
                    display: 'grid',
                    position: 'absolute',
                    bottom: `${30 + x}vh`,
                    left: '0',
                    width: '100%',
                    height: '100vh',
                    alignContent: 'end',
                }
            );
        } else {
            return (
                {
                    display: 'grid',
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '100vh',
                    alignContent: 'end',
                }
            );
        };
        
    };

    const mobileLaxVal = (y, z) => {
        if(mediaQ) {
            return [40 + y, -50 + z];
        } else {
            return [5 + y, -25 + z];
        };
    };

    const mobileLaxValTxt = () => {
        if(mediaQ) {
            return [-20, 20];
        } else {
            return [-120, 70];
        };
    };
    
    return (    
        <div className = "mainImg">
            <Parallax y={ mobileLaxVal(0, 0) } styleInner = { styleBotAlign() } styleOuter = {{pointerEvents: 'none'}}>
                <div className = "mainImgBG"></div>
            </Parallax>
            <Parallax y={ mobileLaxVal(60, -40) } styleInner = { styleBotAlign2(-10) }>
                <BG1 />
            </Parallax>
            <Parallax y={ mobileLaxValTxt() } styleInner = {{
                display: 'grid',
                position: 'absolute',
                width: '100%',
                height: '100vh',
                alignContent: 'center',
            }}  styleOuter = {{pointerEvents: 'none'}}>
                <h1 className = "mainTitle">Guide</h1>
            </Parallax>
            <Parallax y={ mobileLaxVal(100, -80) } styleInner = { styleBotAlign2(25) }>
                <BG3 />
            </Parallax>
            <Parallax y={ mobileLaxVal(0, 0) } styleInner = { styleBotAlign() }>
                <BG2 />
            </Parallax>
            <Parallax y={ mobileLaxVal(4,2) } styleInner = { styleBotAlign() }>
                <Svganim1 />
            </Parallax>
            <Parallax y={ ['-300px','700px'] } 
                styleOuter = {{
                    display: 'grid',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    gridTemplateColumns: '1fr',
                    pointerEvents: 'none',
                }}
                styleInner = {{
                    display: 'grid',
                    width: '15%',
                    height: '15%',
                    justifySelf: 'center',
                    alignSelf: 'center'
            }}>
                <Svganim2 className = "svganim2" />
            </Parallax>
        </div>
    );
};

const Img1 = () => {
    const AnimatedData = animated(DataIllust)
    const mediaQ = useMediaQuery({ query: '(max-width: 700px), (max-aspect-ratio: 1/1)' });

    const mobileLaxVal = () => {
        if(mediaQ) {
            return 80 + '%';
        } else {
            return 35 + '%';
        };
    };

    const mobileLaxVal2 = (y,z) => {
        if(mediaQ) {
            return [35 + y, -100 + z];
        } else {
            return [-100 + y, -300 + z];
        };
    };

    const mobileLaxVal3 = (x, y) => {
        if(mediaQ) {
            return [100 + x, 150 + y];
        } else {
            return [300 + x, 350 + y];
        };
    };

    const [scrollAnim , set] = useSpring(() => ({opacity: 0, rotate: 0 }));

    const bind = useScroll(
        ({ xy: [, y] }) => {
            set({ 
                opacity: Math.min(Math.max(parseInt((y-mobileLaxVal3(0,0)[0])*1000/mobileLaxVal3(0,0)[1]), 0), 1000)/1000,
                rotate: Math.min(Math.max(parseInt((y-mobileLaxVal3(0,100)[0])*50/mobileLaxVal3(0,100)[1]), 0), 1000)/1000  
            });
        },
        { domTarget: window },
    ); 

    React.useEffect(bind, [bind]);
    
    return (    
        <div className = "img1">
            <Parallax y={ mobileLaxVal2(0, 0) } 
                styleOuter = {{
                    position: 'absolute',
                    top: '-35%',
                    display: 'grid',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    gridTemplateColumns: '1fr',
                }}
                styleInner = {{
                    display: 'grid',
                    width: mobileLaxVal(),
                    height: mobileLaxVal(),
                    justifySelf: 'center',
                    alignSelf: 'center'
            }}>
                <Svganim3 />
            </Parallax>
            <Parallax x = {[5, -5]} y={ mobileLaxVal2(150, -100) } 
                styleOuter = {{
                    position: 'absolute',
                    top: '-35%',
                    display: 'grid',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    gridTemplateColumns: '1fr',
                }}
                styleInner = {{
                    display: 'grid',
                    width: mobileLaxVal(),
                    height: mobileLaxVal(),
                    justifySelf: 'center',
                    alignSelf: 'center'
            }}>
                <AnimatedData style = { { opacity: scrollAnim.opacity, transform: scrollAnim.rotate.interpolate(rotate => `rotate(-${rotate}turn)`) } } />
            </Parallax>
        </div>
    );
};

export { MainImg, Img1 }