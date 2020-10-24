import React, { Suspense } from "react";
import { OpenQuote } from "./Content.js";
import { LatarBelakang, SecondQuote } from "./Content.js";

const Main = () => {
    const MainImg = React.lazy(() => import('./lazy proxy/MainImg.js'));
    const Img1 = React.lazy(() => import('./lazy proxy/Img1.js'));
    const BannerLB = React.lazy(() => import('./lazy proxy/BannerLB.js'));
    const BannerImg = React.lazy(() => import('./lazy proxy/BannerImg.js'));

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <MainImg />
                <Img1 />
            </Suspense>
            <div className = "contentBody">
                <div className = "opening">
                    <div className = "openQuote">
                        <OpenQuote />
                    </div>
                </div>
                <div className = "latarBelakang">
                    <Suspense fallback={<div>Loading...</div>}>
                        <BannerLB />
                    </Suspense>
                    <LatarBelakang />
                </div>
                <div className = "bodySQ">
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
