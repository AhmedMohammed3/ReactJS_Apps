import { useDispatch } from 'react-redux';

import classes from './Auth.module.css';
import { authActions } from '../store/slices/auth-slice';
import { useRef, useState } from 'react';

const Auth = () => {
	const [emailIsValid, setEmailValid] = useState(false);
	const [emailIsTouched, setEmailIsTouched] = useState(false);
	const [passwordIsValid, setPasswordValid] = useState(false);
	const [passwordIsTouched, setPasswordIsTouched] = useState(false);

	const emailRef = useRef();
	const passwordRef = useRef();

	const dispatch = useDispatch();
	const loginHandler = event => {
		event.preventDefault();

		setEmailIsTouched(true);
		setPasswordIsTouched(true);

		const invalidEmail = !emailRef.current.value.includes('@');
		const invalidPassword = passwordRef.current.value.length === 0;
		if (invalidEmail || invalidPassword) {
			if (invalidEmail) {
				setEmailValid(false);
			} else {
				setEmailValid(true);
			}
			if (invalidPassword) {
				setPasswordValid(false);
			} else {
				setPasswordValid(true);
			}
			return;
		}

		setEmailValid(true);
		setPasswordValid(true);

		dispatch(authActions.login());
	};
	return (
		<main className={classes.auth}>
			<section>
				<form onSubmit={loginHandler}>
					<div className={classes.control}>
						<label htmlFor='email'>Email</label>
						<input
							className={`${
								!emailIsValid && emailIsTouched && classes.invalid
							}`}
							ref={emailRef}
							type='email'
							id='email'
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor='password'>Password</label>
						<input
							className={`${
								!passwordIsValid && passwordIsTouched && classes.invalid
							}`}
							ref={passwordRef}
							type='password'
							id='password'
						/>
					</div>
					<button>Login</button>
				</form>
			</section>
		</main>
	);
};

export default Auth;
