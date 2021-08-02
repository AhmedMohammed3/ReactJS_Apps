import useIn from '../hooks/use-in';

const BasicForm = (props) => {
	const isNotEmpty = (value) => value.trim() !== '';
	const isEmail = (value) => value.trim().includes('@');
	const {
		value: firstNameValue,
		isValid: firstNameIsValid,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: firstNameReset,
	} = useIn(isNotEmpty);

	const {
		value: lastNameValue,
		isValid: lastNameIsValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: lastNameReset,
	} = useIn(isNotEmpty);

	const {
		value: emailValue,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: emailReset,
	} = useIn(isEmail);

	let formIsValid = false;

	if (firstNameIsValid && lastNameIsValid && emailIsValid) {
		formIsValid = true;
	}

	const submitHandler = (event) => {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}

		console.log(firstNameValue);
		console.log(lastNameValue);
		console.log(emailValue);

		firstNameReset();
		lastNameReset();
		emailReset();
	};

	const fNInputClasses = firstNameHasError
		? 'form-control invalid'
		: 'form-control';

	const lNInputClasses = lastNameHasError
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = emailHasError
		? 'form-control invalid'
		: 'form-control';
	return (
		<form onSubmit={submitHandler}>
			<div className='control-group'>
				<div className={fNInputClasses}>
					<label htmlFor='fName'>First Name</label>
					<input
						type='text'
						id='fName'
						value={firstNameValue}
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
					/>
					{firstNameHasError && (
						<p className='error-text'>First Name must not be empty.</p>
					)}
				</div>
				<div className={lNInputClasses}>
					<label htmlFor='lName'>Last Name</label>
					<input
						type='text'
						id='lName'
						value={lastNameValue}
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
					/>
					{lastNameHasError && (
						<p className='error-text'>Last Name must not be empty.</p>
					)}
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='email'>E-Mail Address</label>
				<input
					type='text'
					id='email'
					value={emailValue}
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
				/>
				{emailHasError && <p className='error-text'>Email must be valid</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
