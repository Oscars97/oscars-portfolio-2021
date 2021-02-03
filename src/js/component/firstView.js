import React from "react";
import neweguy from "./newguy.png";
const FirstView = () => {
	return (
		<div className="container-fluid first-view-info">
			<div className="presentation">
				<div className="info">
					<h3>Welcome to my world</h3>
					<br />
					<h1>
						Hi, my name is <strong>Óscar Sánchez</strong>
					</h1>
					<hr />
					<h2>Based in Pérez Zeledón, &#127464;&#127479;</h2>
					<button
						type="button"
						href="#About"
						className="btn btn-outline-dark btn-lg btn-block">
						Lets talk
					</button>
				</div>
				<div className="image">
					<img id="guy-coding" src={neweguy} />
				</div>
			</div>
		</div>
	);
};

export default FirstView;
