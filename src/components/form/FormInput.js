import { forwardRef } from 'react';

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

export default FormInput;
