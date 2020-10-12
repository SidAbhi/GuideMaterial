import React from "react";
import {LatarBelakang} from "./Content.js";

const Main = () => {


	return (
		<div className = "content">
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
	);
};

export default Main;
