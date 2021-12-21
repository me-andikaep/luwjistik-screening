import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ReactLoading from 'react-loading';

const Header = (props) => {
	const history = useHistory();

	const [loading, setLoading] = useState(false);

	const onLogout = () => {
		setLoading(true);
		setTimeout(() => {
			localStorage.removeItem('order-auth');
			localStorage.removeItem('order-session');
			history.replace('/login');
			setLoading(false);
		}, 1000);
	};

	return (
		<div className='header-container'>
			<div>Order</div>
			<button
				className={`${loading ? 'loading' : ''}  btn-logout`}
				onClick={() => onLogout()}
			>
				Logout
				{loading && (
					<ReactLoading type='spinningBubbles' className='loading-item' />
				)}
			</button>
		</div>
	);
};

export default Header;
