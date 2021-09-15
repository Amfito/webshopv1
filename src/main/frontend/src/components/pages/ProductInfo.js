import React, {
	useEffect,
	useContext,
} from "react";
import Axios from "axios";
import context from "../Context/context";

const ProductInfo = () => {
	const { globalState, globalDispatch } =
		useContext(context);

	const product = globalState.product.product;

	useEffect(() => {
		Axios.get("/api/");
		return () => {};
	}, []);

	console.log(globalState);
	return (
		<div className="main-box">
			<div className="content-box">
				<div className="product-info-box">
					<div className="product-info-box-atributes">
						<div className="product-img-box">
							<img
								src={product.img}
								alt=""
								className="product-info-img"
							></img>
						</div>
						<div className="product-info-atributes-info-box">
							<h1 className="x-large">
								{product.name}
							</h1>
							<h2 className="product-info-text">
								{product.manufactorer}
							</h2>
							<h2 className="product-info-text">
								{product.atribute.name} :{" "}
								{product.atribute.value}
							</h2>
							{product.sale > 0 ? (
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
							{product.sale > 0 ? (
								<h3
									className="prdouct-price-sale"
									style={{
										textAlign: "right",
										fontSize: "2rem",
									}}
								>
									$ {product.sale}
								</h3>
							) : (
								<h3> </h3>
							)}
							<div
								className="add-to-cart"
								onClick={() =>
									globalDispatch({
										type: "ADD_TO_CART",
										payload: product,
									})
								}
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
