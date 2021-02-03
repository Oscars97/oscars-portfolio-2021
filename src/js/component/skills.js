import React from "react";

const Skills = () => {
	return (
		<div id="skills" className="container-fluid">
			<h1>I Build Projects With: </h1>
			<div className="skills-container">
				<div className="skill-icon">
					<span>
						<i className="fab fa-js" />
						Javascript
					</span>
				</div>
				<br />
				<div className="skill-icon">
					<span>
						<i className="fab fa-react" />
						React Js
					</span>
				</div>
				<br />
				<div className="skill-icon">
					<span>
						<i className="fab fa-bootstrap" />
						Bootstrap
					</span>
				</div>
				<br />
				<div className="skill-icon">
					<span>
						<i className="fab fa-python" />
						Python
					</span>
				</div>
				<br />
				<div className="skill-icon">
					<span>
						<i className="fab fa-github" />
						Git
					</span>
				</div>
			</div>
		</div>
	);
};

export default Skills;
