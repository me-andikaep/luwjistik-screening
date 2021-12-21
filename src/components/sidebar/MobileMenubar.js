import { NavLink } from 'react-router-dom';

const MobileMenubar = (props) => {
	const onActiveCssBorderTop = {
		position: 'absolute',
		borderTop: '5px solid #6aa055',
		width: '30px',
		top: '0',
	};
	const currentLocation = window.location.pathname;

	return (
		<div className='c-menubar-mobile'>
			<div className='menubar-mobile-nav'>
				<NavLink
					className='menubar-mobile-nav-link'
					to='/order'
					activeClassName='active'
				>
					<div
						style={
							currentLocation.includes('/order') ? onActiveCssBorderTop : null
						}
					></div>
					Order
				</NavLink>
				<NavLink
					className='menubar-mobile-nav-link'
					to='/contact'
					activeClassName='active'
				>
					<div
						style={
							currentLocation.includes('/contact') ? onActiveCssBorderTop : null
						}
					></div>
					Contact
				</NavLink>
			</div>
		</div>
	);
};

export default MobileMenubar;
