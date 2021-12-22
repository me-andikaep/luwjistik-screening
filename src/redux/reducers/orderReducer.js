export const Actions = {
	SUCCESS_GET_ORDER_LIST: 'SUCCESS_GET_ORDER_LIST',
	ERROR_GET_ORDER_LIST: 'ERROR_GET_ORDER_LIST',
	LOADING_ORDER: 'LOADING_ORDER',

	SUCCESS_POST_ORDER: 'SUCCESS_POST_ORDER',
	ERROR_POST_ORDER: 'ERROR_POST_ORDER',
};

const initialState = {
	orders: null,
	order: null,
	loading: false,
	error: null,
};

export const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SUCCESS_GET_ORDER_LIST:
			return {
				...state,
				orders: action.orders,
				error: null,
			};
		case Actions.ERROR_GET_ORDER_LIST:
			return { ...state, error: action.error };
		case Actions.LOADING_ORDER:
			return { ...state, loading: action.loading };
		case Actions.SUCCESS_POST_ORDER:
			return {
				...state,
				order: action.order,
				error: null,
			};
		case Actions.ERROR_POST_ORDER:
			return { ...state, error: action.error };
		default:
			return state;
	}
};
