import ReactLoading from 'react-loading';

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

export default Loading;
