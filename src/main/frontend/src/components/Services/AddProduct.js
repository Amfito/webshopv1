import React from "react";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import AddProductForm from "../Content/AddProductForm";
import { NotificationManager } from "react-notifications";

const AddProduct = () => {
	const createNotification = (type) => {
		switch (type) {
			case "success":
				return NotificationManager.success(
					"Product",
					"Added Sucsefuly",
					2000
				);
			default:
				break;
		}
	};
	const schema = yup.object().shape({
		category: yup.string().required(),
		name: yup.string().required(),
		brand: yup.string().required(),
		atribute: yup.string().required(),
		description: yup.string().required(),
		price: yup.string().required().min(3),
		salesprice: yup.string().required(),
		imagelink: yup.string().required(),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const addProduct = (data) => {
		createNotification("success");
		axios.post(
			`http://localhost:8080/register_product?name=${data.name}&brand=${data.brand}&model=${data.model}&description=${data.description}
			&category=${data.category}&attributes=${data.atribute}&image=${data.imagelink}&price=${data.price}&salesprice=${data.salesprice}&count=1`
		);
	};

	return (
		<div className="main-box">
			<div className="content-box">
				<h2 className="x-large">
					Create product
				</h2>
				<hr className="products-content-seperator-line " />
				<div className="all-center py-3">
					<form
						className="register-text form "
						onSubmit={handleSubmit(addProduct)}
					>
						{AddProductForm.inputs.map(
							(input, key) => {
								return (
									<div key={key}>
										<h2>{input.label}</h2>
										<input
											className="form-text "
											type={input.type}
											{...register(input.name, {
												required: true,
											})}
										/>
										<h3 className="error-msg">
											{
												errors[input.name]
													?.message
											}
										</h3>
									</div>
								);
							}
						)}
						<button
							className="register"
							style={{
								width: "100%",
								border: "none",
							}}
						>
							<h2 className="button-text">
								Post
							</h2>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;
