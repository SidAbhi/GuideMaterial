import React from "react";
import { OpenQuote } from "./Content.js";
import { MainImg, Img1, BannerLB, BannerImg } from './ParallaxElements';
import { LatarBelakang, SecondQuote } from "./Content.js";

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
                <div className = "bodySQ">
                    <BannerImg />
                    <SecondQuote />
                </div>
            </div>
        </div>
    );
};

export default Main;
