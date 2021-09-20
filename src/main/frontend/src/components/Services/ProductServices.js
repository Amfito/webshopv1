import axios from "axios";
import React from "react";

const PRODUCTS_REST_API_URL =
	"http://localhost:8080/api/products";

const getUsers = (props) => {
	axios.get(PRODUCTS_REST_API_URL);
};

export default getUsers();
