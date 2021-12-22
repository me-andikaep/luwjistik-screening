import { HandlerAPI } from './api/HandlerApi';
import { Actions } from '../redux/reducers/orderReducer';

export const GetOrderList = async (dispatch) => {
	try {
		dispatch({ type: Actions.LOADING_ORDER, loading: true });
		const response = await HandlerAPI(
			`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_API_ORDER}`,
			'get'
		);
		if (response.status === 200) {
			dispatch({
				type: Actions.SUCCESS_GET_ORDER_LIST,
				orders: response.data?.data,
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

export const PostOrderList = async (body, dispatch) => {
	try {
		dispatch({ type: Actions.LOADING_ORDER, loading: true });
		const response = await HandlerAPI(
			`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_API_ORDER}`,
			'post',
			null,
			body
		);
		if (response.status === 200) {
			console.log('response post', response);
			dispatch({
				type: Actions.SUCCESS_POST_ORDER,
				order: response.data?.data,
			});
			dispatch({ type: Actions.LOADING_ORDER, loading: false });
			return Promise.resolve(response.data);
		}
	} catch (error) {
		dispatch({
			type: Actions.ERROR_POST_ORDER,
			error: JSON.parse(error?.request?.response),
		});
		dispatch({ type: Actions.LOADING_ORDER, loading: false });
		return Promise.reject(JSON.parse(error?.request?.response));
	}
};
