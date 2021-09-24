import React, { useContext } from "react";
import context from "../Context/context";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { NotificationManager } from "react-notifications";

const Cart = () => {
	const { globalState, globalDispatch } =
		useContext(context);

	const createNotification = (type) => {
		switch (type) {
			case "success":
				return NotificationManager.success(
					"Purchase completed",
					"Successfully",
					2000
				);
			default:
				break;
		}
	};

	let total = 0.0;
	const cart = globalState.cart;

	return (
		<div className="main-box">
			<div className="content-box">
				{cart.map((product, index) => {
					if (product.salesprice > 0) {
						total +=
							product.salesprice * product.count;
					} else {
						total +=
							product.price * product.count;
					}
					return (
						<div className="cart-product-box">
							<div className="cart-image-box">
								<Link
									to={`/product/${product.id}`}
								>
									<img
										src={product.image}
										alt=""
										className="cart-product-img"
									/>
								</Link>
							</div>
							<div className="cart-product-info-box">
								<h1>{product.name}</h1>
								<h2>{product.brand}</h2>
							</div>
							<div className="cart-price-box">
								{product.salesprice > 0 ? (
									<h3
										className="cart-product-price"
										style={{
											textDecoration:
												"line-through red",
											paddingRight: "0.5rem",
										}}
									>
										$ {product.price}
									</h3>
								) : (
									<h3 className="cart-product-price">
										{" "}
										$ {product.price}{" "}
									</h3>
								)}
								{product.salesprice > 0 ? (
									<h3 className="cart-product-price-sale">
										$ {product.salesprice}
									</h3>
								) : (
									<h3> </h3>
								)}
							</div>
							<div className="cart-amount-box">
								<AddIcon
									fontSize="large"
									style={{ cursor: "pointer" }}
									onClick={() =>
										globalDispatch({
											type: "INCREASE_COUNT",
											payload: index,
										})
									}
								/>
								{product.count === 0
									? globalDispatch({
											type: "REMOVE_ITEM",
											payload: product.id,
									  })
									: ""}
								<h2>{product.count}</h2>
								<RemoveIcon
									style={{ cursor: "pointer" }}
									fontSize="large"
									onClick={() =>
										globalDispatch({
											type: "DECREASE_COUNT",
											payload: index,
										})
									}
								/>
							</div>
						</div>
					);
				})}
				<div className="amount-box">
					<h1 className="amount-text">
						Total: ${" "}
						{parseFloat(total).toFixed(2)}
					</h1>
				</div>
				<div
					className="checkout"
					onClick={() => {
						createNotification("success");
						globalDispatch({ type: "CHECKOUT" });
					}}
				>
					<h2 className="button-text">
						Checkout
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Cart;
