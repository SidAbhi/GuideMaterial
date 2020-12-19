import React, { Suspense } from "react";
import './stylesheets/sapa.css'
import ParallaxCache from './ParallaxCache';
import { SapaQuote, Results, SapaQuote2 } from "./components/Content.js";

const SAPA = () => {
  const SapaMainImg = React.lazy(() => import('./components/sapa/SapaMainImg'));
  const BannerUR = React.lazy(() => import('./components/sapa/BannerUR'));

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
        <Suspense fallback={<div className = "loading">Loading...</div>}>
          <BannerUR />
        </Suspense>
        <Results />
      </div>
      <div className = "sapa-sq">
        <SapaQuote2 />
      </div>
    </div>
  );
};

export default SAPA;
