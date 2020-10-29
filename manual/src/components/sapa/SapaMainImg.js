import React from "react";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive';
import { animated, useSpring, to } from 'react-spring';

const SapaMainImg = () => {
    const { rangeAnim } = useSpring({
        from: {rangeAnim: 0},
        rangeAnim: 1000,
        delay: 300,
        config: {
            mass: 4,
        }
    });
    const { monitorHeight, monitorPos } = useSpring({
        from: {
            monitorHeight: 0,
            monitorPos: 0,
        },
        monitorHeight: 507.87,
        monitorPos: 286.1,
        delay: 900,
        config: {
            mass: 4,
            tension: 180,
        }
    });
    const { monitorHeight2, monitorPos2 } = useSpring({
        from: {
            monitorHeight2: 0,
            monitorPos2: 318,
        },
        monitorHeight2: 547.87,
        monitorPos2: 118.8,
        delay: 600,
        config: {
            mass: 2,
            tension: 120,
        }
    });
    const { rangeAnim2 } = useSpring({
        from: { rangeAnim2: 0 },
        rangeAnim2: 1000,
        delay: 1500,
        config: {
            mass: 2,
        }
    });
    const svgProps = useSpring({
        from: { 
            opacity: 0,
            y: 300,
        },
        opacity: 1,
        y: 0,
        delay: 1200,
        config: {
            mass: 2
        }
    });
    const {opacity, y1, y2, y3} = useSpring({
        from: { 
            opacity: 0,
            y1: 150,
            y2: 200,
            y3: 250,
        },
        opacity: 1,
        y1: 303.5,
        y2: 303.5,
        y3: 303.5,
        delay: 1600,
        config: {
            mass: 4,
            tension: 120
        }
    });
    const { opacity2, r, yAva, xTxt1, xTxt2, width2 } = useSpring({
        from: {
            opacity2: 0,
            r: 0,
            yAva: 'translate(0 120)',
            xTxt1: 'translate(80 0)',
            xTxt2: 'translate(120 0)',

            width2: 0,
        },
        opacity2: 1,
        r: 83.3,
        yAva: 'translate(0 0)',
        xTxt1: 'translate(0 0)',
        xTxt2: 'translate(0 0)',
        width2: 132.6,
        delay: 1800,
        config: {
            mass: 5,
            tension: 150,
        }
    });
    const { xTxt3, xTxt4, xTxt5, width1 } = useSpring({
        from: {
            xTxt3: 'translate(160 0)',
            xTxt4: 'translate(200 0)',
            xTxt5: 'translate(200 0)',
            width1: 0,
        },
        xTxt3: 'translate(0 0)',
        xTxt4: 'translate(0 0)',
        xTxt5: 'translate(0 0)',
        width1: 74.3,
        delay: 1800,
        config: {
            mass: 8,
            tension: 100,
        }
    });
    const { width3, width4, width5, width6, width7, cPos1, cPos2, cPos3, cPos4, cPos5 } = useSpring({
        from: {
            width3: 0,
            width4: 0,
            width5: 0,
            width6: 0,
            width7: 0,
            cPos1: 418,
            cPos2: 418,
            cPos3: 418,
            cPos4: 418,
            cPos5: 418,
        },
        width3: 218,
        width4: 436,
        width5: 388,
        width6: 316,
        width7: 195,
        cPos1: 632.5,
        cPos2: 849.5,
        cPos3: 801.5,
        cPos4: 729.5,
        cPos5: 605.5,
        delay: 2100,
        config: {
            mass: 4,
            tension: 100,
        }
    });
    return (
        <div className = "mainImgSapa bgClr2">
            <Parallax y = {[20, -20]}
            styleInner = {{
                position: 'absolute',
                width: '100%',
                height: '100vh',
            }}>
                <animated.svg className = "mainImgSapaContent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
                    <animated.path 
                    d={rangeAnim.to({
                        range: [0, 250, 1000],
                        output: [                  
                            "M 467 1038 C 467 1038 467 1038 467 1038 C 468.9 1041.4 477.5 1056.1 486 1055 C 489.4 1054.5 494.4 1051.4 508 1010 C 514.9 989.1 513.8 989.2 517 981 C 525.4 959.4 535.1 952.8 551 931 C 573.1 900.6 584.2 885.5 582 868 C 578 836.5 536.2 820.8 534 820 C 530.2 818.6 499.8 808.2 469 824 C 433 842.5 413.2 888.3 425 917 C 432.2 934.6 444.6 929.3 455 949 C 471.1 979.5 448.1 1005.2 467 1038",
                            
                            "M 467 627 C 467 627 467 627 467 627 C 468.9 630.4 477.5 645.1 486 644 C 489.4 643.5 512.4 657.4 526 616 C 532.9 595.1 559.8 558.2 563 550 C 571.4 528.4 585.1 523.8 601 502 C 623.1 471.6 608.2 461.5 606 444 C 602 412.5 553.2 386.8 551 386 C 547.2 384.6 478.8 364.2 448 380 C 412 398.5 369.2 467.3 381 496 C 388.2 513.6 419.6 541.3 430 561 C 446.1 591.5 448.1 594.2 467 627",

                            "M 56.1 796.2 C 60.4 816.4 96.7 988.7 208.1 1019.2 C 290.3 1041.6 322.9 962.2 455.1 946.2 C 527.75 937.4 571.975 954.85 612.05 972.025 C 652.125 989.2 688.05 1006.1 744.1 996.2 C 893.3 969.8 1007.2 785 1030.1 622.2 C 1050.8 475.1 995 362.1 979.1 332.2 C 880 145.5 656.8 37.7 528.1 72.2 C 413 103 283.5 19.3 132 122 C 37.9 185.8 143 442 99.1 537.2 C 49.6 644.5 49.7 765.5 56.1 796.2 C 56.1 796.2 56.1 796.2 56.1 796.2"
                        ],
                    })}
                    fill="#F9A846"/>
                </animated.svg>
            </Parallax>
            <Parallax y = {[-20, 20]}
            styleInner = {{
                position: 'absolute',
                width: '100%',
                height: '100vh',
            }}>     
                <svg className="mainImgSapaContent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
                <animated.rect x={monitorPos2} y="266.1" width="842.5" height = {monitorHeight2} rx="12" fill="#192e42"/>
            </svg>
                <svg className="mainImgSapaContent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
                <animated.rect x="138.8" y={monitorPos} width="802.5" height = {monitorHeight} rx="12" fill="#f4f4f4"/>
            </svg>
                <animated.svg className = "mainImgSapaContent" style = {svgProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
                <animated.path 
                d={rangeAnim2.to({
                    range: [0, 1000],
                    output: [                  
                        "M 682.4 286.1 L 397.6 286.1 C 395.2 286.1 393.2 291.5 393.2 298.1 C 393.2 301.75 393.2 305.4 393.2 309.05 L 393.2 320 L 686.8 320 L 686.8 309.05 C 686.8 305.4 686.8 301.75 686.8 298.1 C 686.8 291.5 684.8 286.1 682.4 286.1 Z",
                        
                        "M 929.3 286.1 L 150.8 286.1 C 147.619 286.1 144.564 287.365 142.315 289.615 C 140.065 291.864 138.8 294.919 138.8 298.1 L 138.8 320 L 941.3 320 L 941.3 298.1 C 941.274 294.927 940 291.888 937.756 289.644 C 935.512 287.4 932.473 286.126 929.3 286.1 Z",
                    ],
                })}
                fill="#A5A5A5"/>
            </animated.svg>
                <animated.svg style = {{opacity}} className="mainImgSapaContent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
                    <animated.circle cx="918.5" cy={y1} r="8.5" fill="#f9a846"/>
                    <animated.circle cx="895.5" cy={y2} r="8.5" fill="#f9a846"/>
                    <animated.circle cx="872.5" cy={y3} r="8.5" fill="#f9a846"/>
                </animated.svg>
                <animated.svg style = {{opacity: opacity2}} className = "mainImgSapaContent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
                    <animated.path transform={xTxt1} d="M367.8,641.7c0,.4-43.1.8-96.2.8s-96.2-.4-96.2-.8,43-.8,96.2-.8S367.8,641.2,367.8,641.7Z" fill="#192e42"/>
                    <animated.path transform={xTxt2} d="M367.8,663c0,.4-43.1.8-96.2.8s-96.2-.4-96.2-.8,43-.9,96.2-.9S367.8,662.5,367.8,663Z" fill="#192e42"/>
                    <animated.path transform={xTxt3} d="M367.8,684.2c0,.5-43.1.9-96.2.9s-96.2-.4-96.2-.9,43-.8,96.2-.8S367.8,683.8,367.8,684.2Z" fill="#192e42"/>
                    <animated.path transform={xTxt4} d="M285.9,706c0,.4-25,.8-55.8.8s-55.8-.4-55.8-.8,25-.8,55.8-.8S285.9,705.5,285.9,706Z" fill="#192e42"/>
                    <animated.rect x="175.4" y="598.3" width={width2} height="9.69" transform="translate(483.3 1206.2) rotate(180)" fill="#192e42"/>
                    <animated.circle cx="267.3" cy="458.9" r={r} fill="#a5a5a5"/>
                    <animated.path transform={yAva} d="M213.7,522.9a81.4,81.4,0,0,0,106.4,0c-4.4-15.2-15.2-33.2-41.5-37.2,11.4-4.8,19.5-16.6,19.6-30.5.1-18.2-13.7-33-30.8-33.1s-31,14.6-31,32.8c-.1,14.1,8.1,26,19.7,30.8C229.3,489.8,218.3,507.9,213.7,522.9Z" fill="#f9a846"/>
                    <animated.rect transform={xTxt5} x="175.4" y="739.2" width={width1} height="9.05" fill="#f9a846"/>
                </animated.svg>
                <animated.svg style = {{opacity: opacity2}} className = "mainImgSapaContent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
                    <animated.rect x="418" y="404" width={width3} height="28" rx="12" fill="#192e42"/>
                    <animated.rect x="418" y="459" width={width4} height="28" rx="12" fill="#f9a846"/>
                    <animated.rect x="418" y="514" width={width5} height="28" rx="12" fill="#192e42"/>
                    <animated.rect x="418" y="569" width={width6} height="28" rx="12" fill="#192e42"/>
                    <animated.rect x="418" y="624" width={width7} height="28" rx="12" fill="#192e42"/>
                    <animated.circle cx={cPos1} cy="418" r="20.5" fill="#192e42"/>
                    <animated.circle cx={cPos2} cy="473.5" r="20.5" fill="#f9a846"/>
                    <animated.circle cx={cPos3} cy="527.5" r="20.5" fill="#192e42"/>
                    <animated.circle cx={cPos4} cy="582.5" r="20.5" fill="#192e42"/>
                    <animated.circle cx={cPos5} cy="637.5" r="20.5" fill="#192e42"/>
                </animated.svg>
            </Parallax>
        </div>
    );
};

export default SapaMainImg;