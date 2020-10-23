import React from "react";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { Svganim1, Svganim2, Svganim3 } from './Svganim1';
import { useMediaQuery } from 'react-responsive';
import { animated, useSpring } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import { LBTitle } from './Content.js';
import { ReactComponent as BG1} from './images/BG1.svg';
import { ReactComponent as Pen} from './images/Pen.svg';
import { ReactComponent as BG2 } from './images/ManualIllust1.svg';
import { ReactComponent as DataIllust} from './images/Data1.svg';

const MainImg = () => {
    //Device check
    const mediaQ = useMediaQuery({ query: '(max-width: 770px), (max-aspect-ratio: 1/1)' });

    //parallax element styling
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

    //parallax element value depending on device
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
    const AnimatedPen = animated(Pen)
    const mediaQ = useMediaQuery({ query: '(max-width: 700px), (max-aspect-ratio: 1/1)' });

    const mobileLaxVal = (size) => {
        if(mediaQ) {
            return size + '%';
        } else {
            return size/2 + '%';
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
            return [200 + x, 250 + y];
        };
    };

    const [scrollAnim , set] = useSpring(() => ({ rotate: 0 }));
    const [scrollAnim2 , set2] = useSpring(() => ({ rotate: 0 }));

    const bind = useScroll(
        ({ xy: [, y] }) => {
            set({ 
                rotate: Math.min(Math.max(parseInt((y-mobileLaxVal3(0,100)[0])*50/mobileLaxVal3(0,100)[1]), 0), 1000)/1000  
            });
            set2({
                rotate: Math.min(Math.max(parseInt((y-mobileLaxVal3(0,100)[0])*20/mobileLaxVal3(0,100)[1]), 0), 1000)/1000  
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
                    top: '-40%',
                    display: 'grid',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    gridTemplateColumns: '1fr',
                }}
                styleInner = {{
                    display: 'grid',
                    width: mobileLaxVal(80),
                    height: mobileLaxVal(80),
                    justifySelf: 'center',
                    alignSelf: 'center'
            }}>
                <Svganim3 />
            </Parallax>
            <Parallax y={ mobileLaxVal2(100, -50) } 
                styleOuter = {{
                    position: 'absolute',
                    top: '-30%',
                    display: 'grid',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    gridTemplateColumns: '1fr',
                }}
                styleInner = {{
                    display: 'grid',
                    width: mobileLaxVal(70),
                    height: mobileLaxVal(70),
                    justifySelf: 'center',
                    alignSelf: 'center'
            }}>
                <AnimatedData style = { { transform: scrollAnim.rotate.interpolate(rotate => `rotate(-${rotate}turn)`) } } />
            </Parallax>
            <Parallax y={ mobileLaxVal2(500, -450) } 
                styleOuter = {{
                    position: 'absolute',
                    top: '-30%',
                    display: 'grid',
                    width: '100%',
                    height: '100%',
                    gridTemplateColumns: '1fr',
                }}
                styleInner = {{
                    display: 'grid',
                    position: 'absolute',
                    left: '55%',
                    width: mobileLaxVal(30),
                    height: mobileLaxVal(30),
                    alignSelf: 'center'
            }}>
                <AnimatedPen style = { { transform: scrollAnim2.rotate.interpolate(rotate => `rotate(${rotate}turn)`) } } />
            </Parallax>
        </div>
    );
};

const BannerLB = () => {
    const mediaQ = useMediaQuery({ query: '(max-width: 770px)' });
    const reponsiveHeight = () => mediaQ ? '40vh' : '40vh';
    return (
        <ParallaxBanner className = "laxBannerLB" 
        layers = {[
            {
                image: '/images/TopoBG-8.png',
                amount: 0.4,
                expanded: true,
            },
            {
                children: <LBTitle />,
                amount: -0.4,
                expanded: false,
            },
        ]}
        style = {{
            height: reponsiveHeight(),
            color: '#f4f4f4',
        }}>
        </ParallaxBanner>
        
    );
};


export { MainImg, Img1, BannerLB }