import React, { Suspense } from "react";
import './stylesheets/sapa.css'
import ParallaxCache from './ParallaxCache';
import { SapaQuote, Results } from "./components/Content.js";

const SAPA = () => {
    const SapaMainImg = React.lazy(() => import('./components/sapa/SapaMainImg'));

    return (
        <div>
            <Suspense fallback={<div className = "loading bg-color-2">Loading...</div>}>
                <ParallaxCache />
                <SapaMainImg />
            </Suspense>
            <div className = "content-body">
                <div className= "opening">
                    <SapaQuote />
                </div>
            </div>    
        </div>
    );
};

export default SAPA;
