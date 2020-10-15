import React from "react";
import { OpenQuote } from "./Content.js";
import { MainImg, Img1, BannerLB } from './ParallaxElements';
import { LatarBelakang } from "./Content.js";

const Main = () => {

    return (
        <div>
            <MainImg />
            <Img1 />
            <div className = "contentBody">
                <div className = "opening">
                    <div className = "openQuote">
                        <OpenQuote />
                    </div>
                </div>
                <div className = "latarBelakang">
                    <BannerLB />
                    <LatarBelakang />
                </div>
            </div>
        </div>
    );
};

export default Main;
