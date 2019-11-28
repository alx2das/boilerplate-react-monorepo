import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class MenuComponent extends Component {
	render() {
		return (
			<div className="menu">
				<div>
					<h5>Common chunk</h5>
					<Link to="/">Home</Link>
				</div>
				<div>
					<h5>Auth chunk</h5>
					<Link to="/sign-in">Sign-in</Link>
					<Link to="/sign-up">Sign-up</Link>
					<Link to="/forgot">Forgot</Link>
				</div>
				<div>
					<h5>Welcome chunk</h5>
					<Link to="/welcome-search">Welcome search</Link>
					<Link to="/welcome-confirm">Welcome confirm</Link>
					<Link to="/welcome-final">Welcome final</Link>
				</div>
				<div>
					<h5>Section-one chunk</h5>
					<Link to="/section-one">Section-one</Link>
				</div>
				<div>
					<h5>Section-two chunk</h5>
					<Link to="/section-two">Section-two</Link>
				</div>
			</div>
		);
	}
}