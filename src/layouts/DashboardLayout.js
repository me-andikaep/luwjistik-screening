import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../config/routes';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import MobileMenubar from '../components/sidebar/MobileMenubar';

const DashboardLayout = (props) => {
	const [sidebarOpen, setSidebarOpen] = useState(true);

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
		<div className='dashboard-container'>
			<Header />
			<Sidebar
				isOpen={sidebarOpen}
				setIsOpen={() => setSidebarOpen(!sidebarOpen)}
			/>
			<div className={`${sidebarOpen ? '' : 'close'} content-container`}>
				<Switch>{getRoutes(routes)}</Switch>
			</div>
			<MobileMenubar />
		</div>
	);
};

export default DashboardLayout;
