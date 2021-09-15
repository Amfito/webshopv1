import { useReducer } from "react";

const initialState = {
	product: {},
	cart: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SELECT_ITEM":
			return {
				...state,
				product: {
					...action.payload,
				},
			};
		case "ADD_TO_CART":
			const existingCartItemIndex = state.cart.findIndex(
				(item) => item.id === action.payload.id
			);
			if (existingCartItemIndex > -1) {
				const newState = [
					...state.cart.slice(0, existingCartItemIndex),
					{
						...state.cart[existingCartItemIndex],
						count: state.cart[existingCartItemIndex].count + 1,
					},
					...state.cart.slice(existingCartItemIndex + 1),
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
				...state.cart.slice(0, action.payload),
				...state.cart.slice(action.payload + 1),
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
					count: state.cart[action.payload].count + 1,
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
					count: state.cart[action.payload].count - 1,
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
	const [globalState, globalDispatch] = useReducer(reducer, initialState);

	return { globalState, globalDispatch };
};

export default useGlobalState;
