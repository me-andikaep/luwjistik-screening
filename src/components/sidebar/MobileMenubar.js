import { NavLink } from 'react-router-dom';
import { FiPackage } from 'react-icons/fi';
import { MdPermContactCalendar } from 'react-icons/md';

const MobileMenubar = (props) => {
	const onActiveCssBorderTop = {
		position: 'absolute',
		borderTop: '5px solid #2893e1',
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
					<FiPackage className='menubar-mobile-nav-link-img' />
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
					<MdPermContactCalendar className='menubar-mobile-nav-link-img' />
					Contact
				</NavLink>
			</div>
		</div>
	);
};

export default MobileMenubar;
