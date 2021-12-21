import { NavLink } from 'react-router-dom';
import { FiPackage } from 'react-icons/fi';
import { MdExpand, MdPermContactCalendar } from 'react-icons/md';

const Sidebar = ({ isOpen, setIsOpen }) => {
	console.log('setIsOpen', isOpen);

	return (
		<div className={`${isOpen ? '' : 'close'} c-sidebar`}>
			<ul className={`${isOpen ? '' : 'close'} nav`}>
				<li className='nav-item'>
					<NavLink className='nav-link' to={'/order'} activeClassName='active'>
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

export default Sidebar;
