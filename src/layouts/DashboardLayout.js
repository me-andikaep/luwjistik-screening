import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../config/routes';

const DashboardLayout = (props) => {
	const getRoutes = (routeList) => {
		// console.log('routeList', routeList);
		return routeList.map((prop, key) => {
			return (
				<Route
					path={prop.path}
					component={prop.component}
					key={key}
					exact={prop.isExact}
				/>
			);
		});
	};

	return (
		<div className='layout'>
			tesssss
			<Suspense fallback={<span>Loading</span>}>
				<Switch>{getRoutes(routes)}</Switch>
			</Suspense>
		</div>
	);
};

export default DashboardLayout;
