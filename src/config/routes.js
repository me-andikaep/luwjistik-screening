import { lazy } from 'react';

const routes = [
	{
		path: '/dashboard',
		component: lazy(() => import('../page/Dashboard')),
		isExact: true,
	},
];

export default routes;
