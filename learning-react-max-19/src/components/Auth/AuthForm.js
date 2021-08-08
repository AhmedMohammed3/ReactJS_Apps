import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import classes from './AuthForm.module.css';

import LoadingSpinner from '../UI/LoadingSpinner';
import { AUTH_ENDPOINT } from '../../helpers/http.helper';
import { sendLoginRequest } from '../../store/actions/auth.action';

const AuthForm = ({ redirectTo }) => {
	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const history = useHistory();

	const [isLogin, setIsLogin] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	const dispatch = useDispatch();

	const switchAuthModeHandler = () => {
		setIsLogin(prevState => !prevState);
	};

	const submitHandler = event => {
		event.preventDefault();

		const email = emailInputRef.current.value;
		const password = passwordInputRef.current.value;
		// optional: Add validation
		/* Skipped assuming all entered values are correct*/

		setIsLoading(true);
		fetch(`${AUTH_ENDPOINT}/${isLogin ? 'login' : 'signup'}`, {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(async res => {
				setIsLoading(false);
				const resData = await res.json();
				if (!res.ok) {
					throw new Error(resData.message);
				}
				if (isLogin) {
					const { idToken, expiresIn } = resData;
					const expirationTime = new Date(
						new Date().getTime() + +expiresIn * 1000
					);
					dispatch(sendLoginRequest(idToken, expirationTime));
					console.log(resData);
					redirectTo ? history.replace(redirectTo) : history.replace('/');
				} else {
					console.log('Registered', resData);
					alert(resData.message);
					setIsLogin(true);
				}
			})
			.catch(err => {
				console.log(err.message);
			});
	};

	return (
		<section className={classes.auth}>
			<h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='email'>Your Email</label>
					<input ref={emailInputRef} type='email' id='email' required />
				</div>
				<div className={classes.control}>
					<label htmlFor='password'>Your Password</label>
					<input
						ref={passwordInputRef}
						type='password'
						id='password'
						required
					/>
				</div>
				<div className={classes.actions}>
					{!isLoading && (
						<button>{isLogin ? 'Login' : 'Create Account'}</button>
					)}
					{isLoading && <LoadingSpinner />}
					<button
						type='button'
						className={classes.toggle}
						onClick={switchAuthModeHandler}>
						{isLogin ? 'Create new account' : 'Login with existing account'}
					</button>
				</div>
			</form>
		</section>
	);
};

export default AuthForm;
