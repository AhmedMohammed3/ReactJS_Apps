import { useRef } from 'react';
import classes from './ProfileForm.module.css';
import { AUTH_ENDPOINT } from '../../helpers/http.helper';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
	const passwordInputRef = useRef();

	const idToken = useSelector(state => state.auth.idToken);
	const history = useHistory();

	const submitHandler = event => {
		event.preventDefault();

		const password = passwordInputRef.current.value;

		// add validation

		fetch(`${AUTH_ENDPOINT}/changepassword`, {
			method: 'POST',
			body: JSON.stringify({
				password,
			}),
			headers: {
				authorization: `Bearer ${idToken}`,
				'Content-Type': 'application/json',
			},
		})
			.then(async res => {
				const resData = await res.json();
				if (!res.ok) {
					throw new Error(resData.message);
				}
				alert(resData.message);
				history.replace('/');
			})
			.catch(err => {
			});
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.control}>
				<label htmlFor='new-password'>New Password</label>
				<input
					ref={passwordInputRef}
					minLength='6'
					type='password'
					id='new-password'
				/>
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
};

export default ProfileForm;
