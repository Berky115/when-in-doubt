// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../assets/stylesheets/navbar.css';

const Navbar = props => (
	<React.Fragment>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="/">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="https://www.github.com/Berky115">
							Github
						</a>
					</li>
				</ul>
			</div>
		</nav>
	</React.Fragment>
);

export default Navbar;
