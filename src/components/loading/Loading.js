import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';

const Loading = ({ showLoading, text }) => {
	return (
		<div
			className='fix-loading'
			style={{ display: showLoading ? 'block' : 'none' }}
		>
			<div
				className='fix-loading-container'
				style={{
					textAlign: 'center',
					display: 'flex',
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					height: '100%',
					flexDirection: 'column',
				}}
			>
				<ReactLoading type='cubes' className='loading-item' />
				<span>{text}</span>
			</div>
		</div>
	);
};

Loading.propTypes = {
	showLoading: PropTypes.bool,
	text: PropTypes.string,
};

export default Loading;
