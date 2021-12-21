import axios from 'axios';
const instance = axios;

instance.interceptors.request.use(
	async (config) => {
		let token = JSON.parse(localStorage.getItem('order-session'));

		if (token) {
			config.headers.Authorization = `${token}`;
			return config;
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export const HandlerAPI = async (
	url,
	method,
	params,
	data,
	cancelToken,
	headers
) => {
	const service = await axios({
		url: url,
		method: method,
		params: params,
		data: data,
		cancelToken: cancelToken,
		headers: headers,
	});

	return service;
};
