import ReactLoading from 'react-loading';

const LoadingPageLazy = () => {
	return (
		<div className='loading-lazy-page'>
			<ReactLoading type='bars' className='loading-item' />
			Loading . . .
		</div>
	);
};

export default LoadingPageLazy;
