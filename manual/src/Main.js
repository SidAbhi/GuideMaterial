import React from "react";
import { LatarBelakang, OpenQuote } from "./Content.js";
import { MainImg, Img1 } from './ParallaxElements';

const Main = () => {

    return (
        <div>
            <MainImg />
            <Img1 />
            <div className = "contentBody">
                <div className = "content">
                    <div className = "article">
                        <main>
                            <div className = "openQuote">
                                <OpenQuote />
                            </div>
                            <div className = "Teori">
                                <h2 id = "latarBelakang">Latar belakang</h2>
                                <LatarBelakang />
                            </div>
                            <div className = "introduction">
                                <h2>Latar belakang</h2>
                                <LatarBelakang />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
