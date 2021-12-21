import { Route, Redirect, Switch } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './page/Login';
import './styles/index.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App(props) {
	const checkAuth = () => {
		const session = localStorage.getItem('order-session');
		if (!session) {
			return false;
		}
		// try {
		// 	var decoded = decode(token);
		// 	var exp = decoded.exp;
		// 	var now = Date.now() / 1000;

		// 	if (exp < now) {
		// 		localStorage.clear();
		// 		return false;
		// 	}
		// } catch (e) {
		// 	return false;
		// }

		return true;
	};

	const PrivateRoute = ({ component: Component, ...rest }) => (
		<Route
			{...rest}
			render={(props) =>
				checkAuth() ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);

	return (
		<div className='App'>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Switch>
				<Route path='/login' component={Login} exact />
				<Redirect from='/' to='/login' exact />
				<PrivateRoute component={DashboardLayout} />
				{/* <Route path='*' component={Page404} /> */}
			</Switch>
		</div>
	);
}

export default App;
