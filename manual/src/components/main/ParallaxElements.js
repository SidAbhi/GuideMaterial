import React from "react";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { Svganim1, Svganim2, Svganim3 } from './Svganim1';
import { useMediaQuery } from 'react-responsive';
import { animated, useSpring } from 'react-spring';
import { LBTitle } from '../Content.js';
import { ReactComponent as BG1} from '../../images/BG1.svg';
import { ReactComponent as Pen} from '../../images/Pen.svg';
import { ReactComponent as BG2 } from '../../images/ManualIllust1.svg';
import { ReactComponent as DataIllust} from '../../images/Data1.svg';

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
                <div className = "mainImgBG bgClr1"></div>
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
                <h1 className = "mainTitle">GUIDE</h1>
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

    const responsiveSize = (size) => mediaQ ? size + '%' : size/2 + '%';
    const responsiveDisableLax = () => mediaQ ? true : false;

    const mobileLaxVal2 = (y,z) => {
        if(mediaQ) {
            return [35 + y, -100 + z];
        } else {
            return [-100 + y, -300 + z];
        };
    };

    const { rotate } = useSpring({config: { mass: 1250, tension: 14, friction: 440 }, loop: true, from: {rotate: 0}, to: {rotate: 360} });
    
    return (    
        <div className = "img1">
            <Parallax y = {[-100, -300]} disabled = {responsiveDisableLax()}
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
                    width: responsiveSize(80),
                    height: responsiveSize(80),
                    justifySelf: 'center',
                    alignSelf: 'center'
            }}>
                <Svganim3 />
            </Parallax>
            <Parallax y={ mobileLaxVal2(100, -50) }  disabled = {responsiveDisableLax()}
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
                    width: responsiveSize(70),
                    height: responsiveSize(70),
                    justifySelf: 'center',
                    alignSelf: 'center'
            }}>
                <AnimatedData style = {{rotate}} />
            </Parallax>
            <Parallax y = { mobileLaxVal2(500, -450) } disabled = {responsiveDisableLax()}
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
                    width: responsiveSize(30),
                    height: responsiveSize(30),
                    alignSelf: 'center'
            }}>
                <AnimatedPen style = {{rotate}} />
            </Parallax>
        </div>
    );
};

const BannerLB = () => {
    const mediaQ = useMediaQuery({ query: '(max-width: 770px)' });
    const reponsiveHeight = () => mediaQ ? '40vh' : '40vh';
    return (
        <ParallaxBanner className = "laxBannerLB bgClr1" 
        layers = {[
            {
                image: './images/TopoBG-8.png',
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

const BannerImg = () => {
    const mediaQ = useMediaQuery({ query: '(max-width: 770px)' });
    const mediaQ4K = useMediaQuery({ query: '(min-height: 1200px)'});
    const reponsiveHeight = () => mediaQ4K ? '100vh' : ( mediaQ ? '600px' : '110vh');
    const responsiveWidth = () => mediaQ ? '90%' : '90%';
    const responsivePosition = () => mediaQ4K ? '-5%' : ( mediaQ ? '-15%' : '-10%');

    return (
        <ParallaxBanner className = "laxBannerImg" 
        layers = {[
            {
                image: './images/IllustHappyBG2.svg',
                amount: -.1,
                expanded: true,
            },
            {
                image: './images/IllustHappyCircle.svg',
                amount: .35,
                expanded: true,
            },
            {
                image: './images/IllustHappyBG.svg',
                amount: .05,
                expanded: true,
            },
            {
                image: './images/IllustHappyLight.svg',
                amount: .08,
                expanded: true,
            },
            {
                image: './images/IllustHappyMain.svg',
                amount: -.3,
                expanded: true,
            },
            {
                image: './images/IllustHappyBubble.svg',
                amount: -.2,
                expanded: true,
            },
            {
                image: './images/IllustHappyLightbulb.svg',
                amount: -.18,
                expanded: true,
            },
        ]}
        style = {{
            height: reponsiveHeight(),
            width: responsiveWidth(),
            color: '#f4f4f4',
            display: 'flex',
            justifySelf: 'center',
            justifyContent: 'center',
            position: 'relative',
            top: responsivePosition(),
            justifySelf: 'center',
            justifyItems: 'center',
            backgroundColor: '#F9A846',
            borderRadius: '18px 18px 18px 18px',
        }}>
        </ParallaxBanner>
        
    );
}


export { MainImg, Img1, BannerLB, BannerImg }