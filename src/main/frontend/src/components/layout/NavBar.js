import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import HomeIcon from "@material-ui/icons/Home";

import context from "../Context/context";

const NavBar = ({ title, subTitle }) => {
	const { globalDispatch } = useContext(context);

	return (
		<nav className="navbar bg-primary">
			<ul className="navBarChoices">
				<Link to="/">
					<HomeIcon fontSize="medium" />
				</Link>
				<Link
					onClick={() =>
						globalDispatch({
							type: "SELECT_CATEGORY",
							payload: "pcParts",
						})
					}
					to={`/products/${"pcParts"}`}
				>
					PC PARTS
				</Link>
				<Link
					to={`/products/${"homeTech"}`}
					onClick={() =>
						globalDispatch({
							type: "SELECT_CATEGORY",
							payload: "homeTech",
						})
					}
				>
					HOME TECH
				</Link>
				<Link
					to={`/products/${"gaiming"}`}
					onClick={() =>
						globalDispatch({
							type: "SELECT_CATEGORY",
							payload: "gaiming",
						})
					}
				>
					GAMING
				</Link>
			</ul>
			<ul className="navBarMenu">
				<Link to="/cart">
					<ShoppingCartOutlinedIcon fontSize="large" />
				</Link>
				<Link to="/about">
					<InfoOutlinedIcon fontSize="large" />
				</Link>
			</ul>
		</nav>
	);
};
export default NavBar;
