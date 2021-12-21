// import { lazy } from 'react';
import Lazyloading from '../components/loading/LazyLoading.js';
import LoadingPageLazy from '../components/loading/LoadingPageLazy.js';

const routes = [
	{
		path: '/order/add-order',
		component: Lazyloading(
			() => {
				return new Promise((resolve) => {
					setTimeout(() => resolve(import('../page/OrderAdd')), 1000);
				});
			},
			{
				fallback: <LoadingPageLazy />,
			}
		),
		isExact: true,
	},
	{
		path: '/order',
		component: Lazyloading(
			() => {
				return new Promise((resolve) => {
					setTimeout(() => resolve(import('../page/Order')), 1000);
				});
			},
			{
				fallback: <LoadingPageLazy />,
			}
		),
		isExact: true,
	},

	{
		path: '/contact',
		component: Lazyloading(
			() => {
				return new Promise((resolve) => {
					setTimeout(() => resolve(import('../page/Contact')), 1000);
				});
			},
			{
				fallback: <LoadingPageLazy />,
			}
		),
		isExact: true,
	},
];

export default routes;
