import React, { useContext } from "react";
import context from "../Context/context";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Cart = () => {
	const { globalState, globalDispatch } =
		useContext(context);

	let total = 0.0;
	const cart = globalState.cart;

	return (
		<div className="main-box">
			<div className="content-box">
				{cart.map((product, index) => {
					if (product.sale > 0) {
						total += product.sale * product.count;
					} else {
						total +=
							product.price * product.count;
					}
					return (
						<div className="cart-product-box">
							<div className="cart-image-box">
								<img
									src={product.img}
									alt=""
									className="cart-product-img"
								/>
							</div>
							<div className="cart-product-info-box">
								<h1>{product.name}</h1>
								<h2>{product.manufactorer}</h2>
							</div>
							<div className="cart-price-box">
								{product.sale > 0 ? (
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
								{product.sale > 0 ? (
									<h3 className="cart-product-price-sale">
										$ {product.sale}
									</h3>
								) : (
									<h3> </h3>
								)}
							</div>
							<div className="cart-amount-box">
								<AddIcon
									fontSize="large"
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
											payload: index,
									  })
									: ""}
								<h2>{product.count}</h2>
								<RemoveIcon
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
				<div className="checkout">
					<h2 className="button-text">
						Checkout
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Cart;
