import React from "react";
import aboutImg from "./girl.png";
const About = () => {
	return (
		<div id="About" className="container main">
			<div className="info-about row">
				<div className="col-4 img">
					<img src={aboutImg} alt="Image not found" />
				</div>
				<div className="col-8 collapse-btns">
					<div className="accordion" id="accordionExample">
						<div className="accordion-item">
							<h2 className="accordion-header" id="headingOne">
								<button
									className="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne">
									Main Skills
								</button>
							</h2>
							<div
								id="collapseOne"
								className="accordion-collapse collapse show"
								aria-labelledby="headingOne"
								data-bs-parent="#accordionExample">
								<div className="accordion-body">
									<ul>
										<li>React.js</li>
										<hr />
										<li>HTML</li>
										<hr />
										<li>CSS</li>
										<hr />
										<li>Git</li>
										<hr />
										<li>Bootstrap</li>
										<hr />
										<li>Problem Solver</li>
										<hr />
									</ul>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="headingTwo">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo">
									Experience
								</button>
							</h2>
							<div
								id="collapseTwo"
								className="accordion-collapse collapse"
								aria-labelledby="headingTwo"
								data-bs-parent="#accordionExample">
								<div className="accordion-body">
									<p>
										Experience working on SPA with React.js.
									</p>
									<hr />
									<p>
										Completed projects with Responsive Web.
										Design
									</p>
									<hr />
									<p>
										Completed project using NodeJs in the
										server side including the DBA SQL
										Server.
									</p>
									<hr />
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="headingThree">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree">
									Education
								</button>
							</h2>
							<div
								id="collapseThree"
								className="accordion-collapse collapse"
								aria-labelledby="headingThree"
								data-bs-parent="#accordionExample">
								<div className="accordion-body">
									<p>
										Python-React Full Stack Development -
										<strong> 4Geeks Academy</strong>
									</p>
									<hr />
									<p>
										Software Development Technical Degree -
										<strong> Universidad Cenfotec</strong>
									</p>
									<hr />
									<p>
										Costumer Service / English Speaking
										Skills -<strong> Sykes Academy</strong>
									</p>
									<hr />
									<p>
										Python Basics -
										<strong> University of Michigan</strong>
									</p>
									<hr />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
