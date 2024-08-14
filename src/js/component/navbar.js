import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="row">
			<nav className="navbar navbar-light bg-light mb-3 ">
				<div className="col-sm-6">
					<Link to="/">
						<span className="btn btn-success mx-5">Contacts</span>
					</Link>
				</div>
				<div className="">
					<Link to="/CrearContacto">
						<button className="btn btn-success mx-5">Add new contact</button>
					</Link>
				</div>
			</nav>
		</div>
	);
};
