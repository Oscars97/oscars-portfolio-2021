import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar fixed-top navbar-expand-lg">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<h1>OSCARS</h1>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#About">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#skills">
								Skills
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Portfolio
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Numbers
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
					<ul className="d-flex list">
						<li>
							<a href="">
								<i className="fab fa-linkedin-in" />
							</a>
						</li>

						<li>
							<a href="">
								<i className="fab fa-github" />
							</a>
						</li>
						<li>
							<a href="">
								<i className="fas fa-paper-plane" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
