import { HandlerAPI } from './api/HandlerApi';

export const GetOrderList = async (dispatch) => {
	try {
		const response = await HandlerAPI(
			`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_API_GET_ORDER_LIST}`,
			'get'
		);
		console.log('res order ', response);
		// if (response.data.status === 200) {
		return Promise.resolve(response.data);
		// }
	} catch (error) {
		return Promise.reject(JSON.parse(error?.request?.response));
	}
};
