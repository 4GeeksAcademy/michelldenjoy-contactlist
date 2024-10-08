import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import ScrollToTop from "./component/scrollToTop";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import CrearContacto from "./views/CrearContacto";
import EditContact from "./views/EditContact"

//create your first component
const Layout = () => {

	return (
		<div>
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/CrearContacto" element={<CrearContacto />} />
						<Route path="/EditContact/:id" element={<EditContact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default Layout;
