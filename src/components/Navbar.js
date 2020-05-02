import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
	// setTimeout(() => {
	// 	props.history.push('/about');
	// }, 10000);

	return (
		<nav className="nav-wrapper reddarken-3">
			<div className="container">
				<a className="brand-logo">Poker Times</a>
				<ul className="right">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};
//higher order component withRouter enable Navbar to get the props from Router DOM
export default withRouter(Navbar);
