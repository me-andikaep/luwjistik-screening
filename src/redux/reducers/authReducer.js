// export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
// export const ERROR_LOGIN = 'ERROR_LOGIN';
// export const LOADING_LOGIN = 'LOADING_LOGIN';

export const Actions = {
	SUCCESS_LOGIN: 'SUCCESS_LOGIN',
	ERROR_LOGIN: 'ERROR_LOGIN',
	LOADING_LOGIN: 'LOADING_LOGIN',
};

const initialState = {
	dtAuth: null,
	loading: false,
	error: null,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SUCCESS_LOGIN:
			return {
				...state,
				dtAuth: action.dtAuth,
				error: null,
			};
		case Actions.ERROR_LOGIN:
			return { ...state, dtAuth: null, error: action.error };
		case Actions.LOADING_LOGIN:
			return { ...state, loading: action.loading };
		default:
			return state;
	}
};
