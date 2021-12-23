import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FormInput2 = forwardRef((props, ref) => {
	const {
		onChange,
		value,
		inputRef,
		// className,
		style,
		type,
		placeholder,
		isError,
	} = props;

	return (
		<div className={`${isError ? 'error ' : ''} c-custom-form-input-2`}>
			<input
				className={`${isError ? 'error ' : ''} custom-input-2`}
				type={type}
				ref={inputRef}
				value={value}
				onChange={onChange}
				style={style}
				placeholder={placeholder}
			/>
			<label className='custom-input-2-label'>{placeholder}</label>
		</div>
	);
});

FormInput2.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	inputRef: PropTypes.any,
	// className: PropTypes.oneOfType([
	// 	PropTypes.string,
	// 	PropTypes.func,
	// 	PropTypes.object,
	// ]),
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
	placeholder: PropTypes.string,
	isError: PropTypes.bool,
};

export default FormInput2;
