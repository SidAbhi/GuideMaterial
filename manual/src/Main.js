import React from "react";
import {LatarBelakang} from "./Content.js";
import {SideNav} from "./Nav.js";
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';

const Main = () => {
	const mediaOffset = () => {
		if (window.matchMedia('(max-width: 440px)').matches) {
			return 0.2
		} else {
			return .9
		}
	};

	return (
		<Parallax  
		pages ={3}>	
			<ParallaxLayer speed={1} offset={0}>
				<img className = "mainImg" src = "/images/Manualillust3.svg" />	
			</ParallaxLayer>
			<ParallaxLayer speed={1} offset={0}>
				<img className = "mainImg" src = "/images/Manualillust1.svg" />	
			</ParallaxLayer>
			<ParallaxLayer speed={.5} offset={0}>
				<img className = "mainImg" src = "/images/Manualillust2.svg" />	
			</ParallaxLayer>
			<ParallaxLayer 
			speed={-0} 
			offset={mediaOffset()}><div className = "contentBody">
				<div className = "content">
					<SideNav />
					<div className = "article">
					<h1 className = "arTitle">Manual SAPA</h1>
						<main>
							<div className = "introduction">
								<h2>Latar belakang</h2>
								<LatarBelakang />
							</div>
							<div className = "Teori">
								<h2>Teori</h2>
								<LatarBelakang />
							</div>
							<div className = "introduction">
								<h2>Latar belakang</h2>
								<LatarBelakang />
							</div>
						</main>
					</div>
				</div>
			</div>	</ParallaxLayer>
		</Parallax>

	);
};

export default Main;
