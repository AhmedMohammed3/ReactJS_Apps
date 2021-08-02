import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
	const {
		value: name,
		isValid: nameIsValid,
		hasError: nameHasError,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: nameReset,
	} = useInput((value) => value.trim() !== '');

	const {
		value: email,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: emailReset,
	} = useInput((value) => value.includes('@'));

	let formIsValid = false;

	if (nameIsValid && emailIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!nameIsValid || !emailIsValid) {
			return;
		}

		console.log(name);
		console.log(email);

		// nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
		nameReset();
		emailReset();
	};

	const nameInputClasses = nameHasError
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = emailHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={nameChangeHandler}
					onBlur={nameBlurHandler}
					value={name}
				/>
				{nameHasError && <p className='error-text'>Name must not be empty.</p>}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='email'>Your E-Mail</label>
				<input
					type='email'
					id='email'
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={email}
				/>
				{emailHasError && (
					<p className='error-text'>Please enter a valid email.</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
