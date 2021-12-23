import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FormInput = forwardRef((props, ref) => {
	const { onChange, value, inputRef, className, style, type, prefix, suffix } =
		props;

	return (
		<div className={className}>
			{prefix}
			<input
				className='custom-input-1'
				type={type}
				ref={inputRef}
				value={value}
				onChange={onChange}
				style={style}
			/>
			{suffix}
		</div>
	);
});

FormInput.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	inputRef: PropTypes.any,
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.object,
	]),
	style: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.object,
	]),
	type: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.object,
	]),
	prefix: PropTypes.element,
	suffix: PropTypes.element,
};


export default FormInput;
