// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../assets/stylesheets/navbar.css';
import SubscribeForm from './SubscribeForm';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.handleModalOn = this.handleModalOn.bind(this);
		this.state = { isModalOn: false };
	}

	handleModalOn() {
		this.setState({ isModalOn: !this.state.isModalOn });
	}
	render() {
		let modal;

		if (this.state.isModalOn) {
			modal = <SubscribeForm />;
		}
		return (
			<React.Fragment>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="/">
									Home <span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="https://github.com/berky115/when-in-doubt">
									Github
								</a>
							</li>
							<li className="nav-item" onClick={this.handleModalOn}>
								<span> Subscribe</span>
							</li>
						</ul>
					</div>
					{modal}
				</nav>
			</React.Fragment>
		);
	}
}

export default Navbar;
