import { forwardRef } from 'react';

const FormInput2 = forwardRef((props, ref) => {
	const {
		onChange,
		value,
		inputRef,
		className,
		style,
		type,
		placeholder,
		isError,
	} = props;

	return (
		<div className={`${isError ? 'error ' : ''} c-custom-form-input-2`}>
			<input
				className='custom-input-2'
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

export default FormInput2;
