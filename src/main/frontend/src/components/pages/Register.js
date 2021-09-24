import React, {
	useEffect,
	useContext,
} from "react";
import axios from "axios";
import "aos/dist/aos.css";

import RegisterForm from "../Content/RegisterForm";
import { useForm } from "react-hook-form";
import context from "../Context/context";
import { NotificationManager } from "react-notifications";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const RegisterPage = () => {
	const createNotification = (type) => {
		switch (type) {
			case "success":
				return NotificationManager.success(
					"Registred",
					"Sucsefuly",
					2000
				);
			default:
				break;
		}
	};

	const { globalState, globalDispatch } =
		useContext(context);

	const schema = yup.object().shape({
		email: yup.string().required(),
		username: yup.string().required().min(3),
		password: yup.string().required().min(5),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onSubmit = (data) => {
		globalDispatch({
			type: "SET_WALIDATION",
			payload: true,
		});
		createNotification("success");
		axios.post(
			`http://localhost:8080/process_register?email=${data.email}&password=${data.password}&username=${data.username}`
		);
	};
	console.log(errors);
	return (
		<div className="main-box">
			<div className="content-box">
				<h2 className="x-large">Register</h2>
				<hr className="products-content-seperator-line " />
				<div className="all-center py-3">
					<form
						className="register-text form "
						onSubmit={handleSubmit(onSubmit)}
					>
						{RegisterForm.inputs.map(
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
							type="submit"
							className="check-credentials"
						>
							Register
						</button>
						{globalState.valid === true ? (
							<a
								type="submit"
								className="register"
								href="http://localhost:8080/login"
							>
								<h2 className="button-register-text">
									To Login
								</h2>
							</a>
						) : (
							""
						)}
					</form>

					<a href="http://localhost:8080/login">
						<h4
							className="register-text"
							style={{ paddingTop: "40%" }}
						>
							Login?
						</h4>
					</a>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
