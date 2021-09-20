import { useReducer } from "react";

const initialState = {
	selectedCategory: "",
	product: {},
	cart: [],
	products: [
		{
			id: 1,
			name: "Playstation 5",
			price: 500,
			img: "https://games4u.pk/wp-content/uploads/2021/06/Sony-PlayStation-5-Disc-Edition.png",
			sale: 450.99,
			count: 1,
			manufactorer: "Sony",
			atribute: {
				name: "Storage",
				value: "1tb",
			},
			description:
				"The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020",
		},
	],
};

const reducer = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case "GET_BY_ID":
			return {
				...state,
				product: action.payload,
			};
		case "DISPLAYED_PRODUCTS":
			return {
				...state,
				products: action.payload,
			};
		case "SELECT_CATEGORY":
			return {
				...state,
				selectedCategory: action.payload,
			};
		case "SELECT_ITEM":
			return {
				...state,
				product: {
					...action.payload,
				},
			};
		case "ADD_TO_CART":
			const existingCartItemIndex =
				state.cart.findIndex(
					(item) => item.id === action.payload.id
				);
			if (existingCartItemIndex > -1) {
				const newState = [
					...state.cart.slice(
						0,
						existingCartItemIndex
					),
					{
						...state.cart[existingCartItemIndex],
						count:
							state.cart[existingCartItemIndex]
								.count + 1,
					},
					...state.cart.slice(
						existingCartItemIndex + 1
					),
				];
				return {
					...state,
					cart: [...newState],
				};
			}

			return {
				...state,
				cart: [...state.cart, action.payload],
			};

		case "REMOVE_ITEM":
			const removedState = [
				...state.cart.filter(
					(item) => item.id !== action.payload
				),
			];
			return {
				...state,
				cart: [...removedState],
			};
		case "INCREASE_COUNT":
			const increaseState = [
				...state.cart.slice(0, action.payload),
				{
					...state.cart[action.payload],
					count:
						state.cart[action.payload].count + 1,
				},
				...state.cart.slice(action.payload + 1),
			];
			return {
				...state,
				cart: [...increaseState],
			};
		case "DECREASE_COUNT":
			const decreaseState = [
				...state.cart.slice(0, action.payload),
				{
					...state.cart[action.payload],
					count:
						state.cart[action.payload].count - 1,
				},
				...state.cart.slice(action.payload + 1),
			];
			return {
				...state,
				cart: [...decreaseState],
			};

		default: {
			return state;
		}
	}
};

const useGlobalState = () => {
	const [globalState, globalDispatch] =
		useReducer(reducer, initialState);

	return { globalState, globalDispatch };
};

export default useGlobalState;
