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
		/*Hidden*/

		{
			id: 2,
			name: "Cannon 5D MK IV",
			price: 900.5,
			img: "http://www.ibserviss.lv/623-thickbox_default/canon-eos-5d-mark-iv.jpg",
			sale: 0,
			count: 1,
			manufactorer: "Sony",
			atribute: {
				name: "Storage",
				value: "1tb",
			},
			description:
				"The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020",
		},
		{
			id: 3,
			name: "Google Home mini",
			price: 99.99,
			img: "https://lh3.googleusercontent.com/7pq6Fhyz_qUGO8ORh6y0Bn6g7lRSBg3yHkNBXmt51g-mc2Viuv6LMjk4E0NXZGI7Rk4",
			sale: 45.55,
			count: 1,
			manufactorer: "Sony",
			atribute: {
				name: "Storage",
				value: "1tb",
			},
			description:
				"The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020",
		},
		{
			id: 4,
			name: "Xbox One",
			price: 320.99,
			img: "https://news.microsoft.com/wp-content/uploads/sites/439/2016/12/XboxOneS_CnsleCntrllr_Hrz_FrntTlt_TransBG_RGB.png",
			sale: 300.99,
			count: 1,
			manufactorer: "Sony",
			atribute: {
				name: "Storage",
				value: "1tb",
			},
			description:
				"The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020",
		},
		{
			id: 5,
			name: "Nintento Switch",
			price: 225.99,
			img: "https://m.media-amazon.com/images/I/41aaQR4AxkL.jpg",
			sale: 180.99,
			count: 1,
			manufactorer: "Sony",
			atribute: {
				name: "Storage",
				value: "1tb",
			},
			description:
				"The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020",
		},
		{
			id: 6,
			name: "NVIDIA RTX 2080 Ti",
			price: 9999.99,
			img: "https://m.media-amazon.com/images/I/8188NNMGDOL._AC_SL1500_.jpg",
			sale: 0,
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
