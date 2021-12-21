import { HandlerAPI } from './api/HandlerApi';
import { Actions } from '../redux/reducers/orderReducer';

export const GetOrderList = async (dispatch) => {
	try {
		dispatch({ type: Actions.LOADING_ORDER, loading: true });
		const response = await HandlerAPI(
			`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_API_GET_ORDER_LIST}`,
			'get'
		);
		if (response.status === 200) {
			dispatch({
				type: Actions.SUCCESS_GET_ORDER_LIST,
				dtAuth: response.data?.data,
			});
			dispatch({ type: Actions.LOADING_ORDER, loading: false });
			return Promise.resolve(response.data);
		}
	} catch (error) {
		dispatch({
			type: Actions.ERROR_GET_ORDER_LIST,
			error: JSON.parse(error?.request?.response),
		});
		dispatch({ type: Actions.LOADING_ORDER, loading: false });
		return Promise.reject(JSON.parse(error?.request?.response));
	}
};
