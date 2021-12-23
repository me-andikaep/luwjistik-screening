import { NavLink } from 'react-router-dom';
import { FiPackage } from 'react-icons/fi';
import { MdExpand, MdPermContactCalendar } from 'react-icons/md';
import PropTypes from 'prop-types';

const Sidebar = ({ isOpen, setIsOpen }) => {
	return (
		<div className={`${isOpen ? '' : 'close'} c-sidebar`}>
			<ul className={`${isOpen ? '' : 'close'} nav`}>
				<li className='nav-item'>
					<NavLink
						className='nav-link'
						to='/order'
						activeClassName='active'
						aria-current='true'
					>
						<FiPackage />
						<span className={`${isOpen ? '' : 'close'} nav-text`}>Order</span>
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						className='nav-link'
						to={'/contact'}
						activeClassName='active'
					>
						<MdPermContactCalendar />
						<span className={`${isOpen ? '' : 'close'} nav-text`}>Contact</span>
					</NavLink>
				</li>
			</ul>
			<div className='c-action' onClick={() => setIsOpen(!isOpen)}>
				<MdExpand className='icon' />
			</div>
		</div>
	);
};

Sidebar.propTypes = {
	isOpen: PropTypes.bool,
	setIsOpen: PropTypes.func,
};

export default Sidebar;
