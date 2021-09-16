import React, {
	useEffect,
	useContext,
} from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import context from "../Context/context";
import AddIcon from "@material-ui/icons/Add";

const Products = () => {
	const { globalState, globalDispatch } =
		useContext(context);

	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	let products = globalState.products;

	return (
		<div className="main-box">
			<div className="content-box">
				<h2 className="category-text">
					{globalState.selectedCategory.toUpperCase()}
				</h2>
				<hr className="products-content-seperator-line" />
				<div
					data-aos="fade-up"
					className="grid-4 py-3"
				>
					{products.map((product) => {
						return (
							<div className="product-card ">
								<div className="card-content flex-collumn ">
									<div className="all-center">
										<Link
											to={`/product/${product.name}`}
											onClick={() =>
												globalDispatch({
													type: "SELECT_ITEM",
													payload: { product },
												})
											}
										>
											<div className="product-img-small-box  ">
												<img
													src={product.img}
													alt=""
													className="product-img "
												/>
											</div>
										</Link>
									</div>
									<div className="card-info-box">
										<div className="card-discription ">
											<h2 className="prdouct-name">
												{product.name}
											</h2>
											<div className="flex-row">
												{product.sale > 0 ? (
													<h3
														className="prdouct-price"
														style={{
															textDecoration:
																"line-through red",
														}}
													>
														$ {product.price}
													</h3>
												) : (
													<h3 className="prdouct-price">
														$ {product.price}
													</h3>
												)}
												{product.sale > 0 ? (
													<h3
														className="prdouct-price-sale"
														style={{
															paddingLeft: "1rem",
														}}
													>
														$ {product.sale}
													</h3>
												) : (
													<h3> </h3>
												)}
											</div>
										</div>
										<div
											className="card-add-product "
											style={{ zIndex: 1 }}
										>
											<AddIcon
												className="quick-add-to-cart"
												color="secondary"
												fontSize="large"
												onClick={() =>
													globalDispatch({
														type: "ADD_TO_CART",
														payload: product,
													})
												}
											/>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Products;
