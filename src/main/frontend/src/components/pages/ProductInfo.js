import React, {
	useEffect,
	useContext,
} from "react";
import Axios from "axios";
import context from "../Context/context";

import { NotificationManager } from "react-notifications";
import axios from "axios";

const ProductInfo = () => {
	useEffect(() => {
		const link = window.location.pathname;
		const linkParts = link.split("/");
		axios
			.get(
				`http://localhost:8080/goods/${linkParts[2]}`
			)
			.then((data) => {
				globalDispatch({
					type: "GET_BY_ID",
					payload: data.data,
				});
			});
	});

	const createNotification = (type) => {
		switch (type) {
			case "success":
				return NotificationManager.success(
					"Selected Product",
					"Aded to cart",
					2000
				);
			default:
				break;
		}
	};

	const { globalState, globalDispatch } =
		useContext(context);

	const product = globalState.product;

	useEffect(() => {
		Axios.get("/api/");
		return () => {};
	}, []);

	return (
		<div className="main-box">
			<div className="content-box">
				<div className="product-info-box">
					<div className="product-info-box-atributes">
						<div className="product-img-box">
							<img
								src={product.image}
								alt=""
								className="product-info-img"
							></img>
						</div>
						<div className="product-info-atributes-info-box">
							<h1 className="x-large">
								{product.name}
							</h1>
							<h2 className="product-info-text">
								{product.brand}
							</h2>
							<h2 className="product-info-text">
								{product.atribute}
							</h2>
							{product.salesprice > 0 ? (
								<h3
									className="product-info-text"
									style={{
										textDecoration:
											"line-through red",
									}}
								>
									$ {product.price}
								</h3>
							) : (
								<h3 className="product-info-text">
									$ {product.price}
								</h3>
							)}
							{product.salesprice > 0 ? (
								<h3
									className="prdouct-price-sale"
									style={{
										textAlign: "right",
										fontSize: "2rem",
									}}
								>
									$ {product.salesprice}
								</h3>
							) : (
								<h3> </h3>
							)}
							<div
								className="add-to-cart"
								onClick={() => {
									globalDispatch({
										type: "ADD_TO_CART",
										payload: product,
									});
									createNotification("success");
								}}
							>
								<h2 className="button-text">
									Add to cart
								</h2>
							</div>
						</div>
					</div>
					<p className="product-description-text">
						{product.description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductInfo;
