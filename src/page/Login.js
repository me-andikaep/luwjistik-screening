import { BiLogIn } from 'react-icons/bi';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import FormInput from '../components/form/FormInput';
import { useRef, useState } from 'react';
import ReactLoading from 'react-loading';
import { LoginHandler } from '../services/authService';
import { useSelector, useDispatch } from 'react-redux';
import { OnError } from '../components/toast';
import { useHistory } from 'react-router-dom';

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);

	const emailRef = useRef();
	const passwordRef = useRef();

	const authState = useSelector((state) => state?.auth);
	const dispatch = useDispatch();
	let history = useHistory();

	const onSibmit = (e) => {
		e.preventDefault();

		let email = emailRef?.current?.value;
		let password = passwordRef?.current?.value;

		console.log(email);
		console.log(password);
		LoginHandler({ email: email, password: password }, dispatch)
			.then((res) => {
				console.log('res login', res);
				history.push('/order');
			})
			.catch((err) => {
				console.log('err login', err.message);
				OnError({ text: err.message });
			});
	};;

	return (
		<div className='container-login'>
			<div className='card-login'>
				<div className='header'>
					Login
					<BiLogIn size={28} />
				</div>
				<form className='' onSubmit={onSibmit}>
					<div className='form-group'>
						<div className='title-login'>Email</div>
						<FormInput
							type='text'
							className='c-custom-input-1'
							inputRef={emailRef}
						/>
					</div>
					<div className='form-group'>
						<div className='title-login'>Password</div>
						<FormInput
							className='c-custom-input-1'
							type={showPassword ? 'text' : 'password'}
							inputRef={passwordRef}
							suffix={
								showPassword ? (
									<AiOutlineEye
										className={`${showPassword ? 'open' : ''} + password-eye`}
										onClick={() => setShowPassword(!showPassword)}
									/>
								) : (
									<AiOutlineEyeInvisible
										className={`${showPassword ? 'open' : ''} + password-eye`}
										onClick={() => setShowPassword(!showPassword)}
									/>
								)
							}
						/>
					</div>

					<button
						type='submit'
						className={`${authState.loading ? 'loading' : ''} + btn-login`}
					>
						Login
						{authState.loading && (
							<ReactLoading type='spinningBubbles' className='loading-item' />
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
