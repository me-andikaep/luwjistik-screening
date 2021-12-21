import { lazy } from 'react';
import Lazyloading from '../components/loading/LazyLoading.js';

const routes = [
	{
		path: '/order',
		component: Lazyloading(
			() => {
				return new Promise((resolve) => {
					setTimeout(() => resolve(import('../page/Order')), 1500);
				});
			},
			{
				fallback: <span>loading</span>,
			}
		),
		isExact: true,
	},
	{
		path: '/contact',
		component: Lazyloading(
			() => {
				return new Promise((resolve) => {
					setTimeout(() => resolve(import('../page/Contact')), 1500);
				});
			},
			{
				fallback: <span>loading</span>,
			}
		),
		isExact: true,
	},
];

export default routes;
