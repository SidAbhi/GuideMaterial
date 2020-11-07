import { useController } from 'react-scroll-parallax';
import { useLayoutEffect, useEffect } from "react";

const ParallaxCache = () => {
    const { parallaxController } = useController();
 
    useLayoutEffect(() => {
        const handler = () => parallaxController.update();
        window.addEventListener('load', handler);
        return () => window.removeEventListener('load', handler);
    }, [parallaxController]);

    useEffect(() => {
        window.requestAnimationFrame(() => {
            parallaxController.update()
        })
    })
    
    return null;
};

export default ParallaxCache;