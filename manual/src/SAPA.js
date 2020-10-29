import React, { Suspense } from "react";
import './stylesheets/sapa.css'
import ParallaxCache from './ParallaxCache';

const SAPA = () => {
    const SapaMainImg = React.lazy(() => import('./components/sapa/SapaMainImg'));

    return (
        <div>
            <Suspense fallback={<div className = "loading bgClr2">Loading...</div>}>
                <ParallaxCache />
                <SapaMainImg />
            </Suspense>
        </div>
    );
};

export default SAPA;
