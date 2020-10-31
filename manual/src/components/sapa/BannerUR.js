import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive';

const BannerUR = () => {
    const mediaQ = useMediaQuery({ query: '(max-width: 770px)' });
    const reponsiveHeight = () => mediaQ ? '40vh' : '40vh';

    const URTitle = () => {
        return (
            <h2 className="chapter-title">INTERPRETING THE RESULTS</h2>
        )
    };

    return (
        <ParallaxBanner className = "lax-banner-lb bg-color-2" 
        layers = {[
            {
                image: './images/TopoBG-8.png',
                amount: 0.4,
                expanded: true,
            },
            {
                children: <URTitle />,
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

export default BannerUR;