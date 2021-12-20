import AuthApi from './api/authApi';
import { Actions } from '../redux/reducers/authReducer';

export const LoginHandler = async (auth, dispatch) => {
	dispatch({ type: Actions.LOADING_LOGIN, loading: true });
	try {
		const response = await AuthApi.post(
			`/${process.env.REACT_APP_API_LOGIN}`,
			auth
		);
		if (response) {
			localStorage.setItem(
				'order-session',
				JSON.stringify(response.data?.data?.session)
			);
			localStorage.setItem('order-auth', JSON.stringify(response.data?.data));
			dispatch({
				type: Actions.SUCCESS_LOGIN,
				dtAuth: response.data?.data,
			});
			dispatch({ type: Actions.LOADING_LOGIN, loading: false });
			return Promise.resolve(response.data?.data);
		}
	} catch (error) {
		dispatch({
			type: Actions.ERROR_LOGIN,
			error: JSON.parse(error?.request?.response),
		});
		dispatch({ type: Actions.LOADING_LOGIN, loading: false });
		return Promise.reject(JSON.parse(error?.request?.response));
	}
};
