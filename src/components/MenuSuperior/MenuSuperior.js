import React, { Component } from "react";

class MenuSuperior extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a href="/" className="navbar-brand">DevMedia</a>
				<button className="navbar-toogler" type="button" data-toogle="collapse">
					<span className="navbar-toogler-icon"></span>
				</butt
				on>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav mr-auto">
					</ul>
				</div>
			</nav>
		)
	}
}

export default MenuSuperior;