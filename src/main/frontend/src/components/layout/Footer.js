import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<div className="footer">
			<div>
				<h1
					style={{
						justifySelf: "flex-end",
						paddingTop: "1rem",
						paddingBottom: "3rem",
					}}
				>
					End of the page
				</h1>
				<div className="flex-row">
					<a
						href="https://github.com/Amfito/webshopv1"
						className="footer-text"
					>
						Git: webshopv1
					</a>
				</div>
				<Link
					to="/about"
					style={{ color: "rgba(87, 87, 87)" }}
				>
					<h2>About</h2>
				</Link>
			</div>
		</div>
	);
};

export default Footer;
