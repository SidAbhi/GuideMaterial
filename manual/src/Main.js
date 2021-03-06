import React, { Suspense } from "react";
import { OpenQuote } from "./components/Content.js";
import { LatarBelakang, SecondQuote } from "./components/Content.js";
import ParallaxCache from './ParallaxCache';

const Main = () => {
    const MainImg = React.lazy(() => import('./lazy proxy/MainImg.js'));
    const Img1 = React.lazy(() => import('./lazy proxy/Img1.js'));
    const BannerLB = React.lazy(() => import('./lazy proxy/BannerLB.js'));
    const BannerImg = React.lazy(() => import('./lazy proxy/BannerImg.js'));

    return (
        <div>
            <Suspense fallback={<div className = "loading bg-color-1">Loading...</div>}>
                <ParallaxCache />
                <MainImg />
                <Img1 />
            </Suspense>
            <div className = "content-body">
                <div className = "opening">
                    <div className = "openQuote">
                        <OpenQuote />
                    </div>
                </div>
                <div className = "latar-belakang">
                    <Suspense fallback={<div>Loading...</div>}>
                        <BannerLB />
                    </Suspense>
                    <LatarBelakang />
                </div>
                <div className = "body-sq bg-color-2">
                    <Suspense fallback={<div>Loading...</div>}>
                        <BannerImg />
                    </Suspense>
                    <SecondQuote />
                </div>
            </div>
        </div>
    );
};

export default Main;
