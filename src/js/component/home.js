import React from "react";

//include images into your bundle

//create your first component
import Navbar from "./navbar.js";
import About from "./about.js";
import FirstView from "./firstView.js";
import Skills from "./skills.js";

export function Home() {
	return (
		<div>
			<Navbar />
			<FirstView />
			<About />
			<Skills />
		</div>
	);
}
