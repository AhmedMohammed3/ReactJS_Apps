import { useState } from 'react';

const useIn = (validate) => {
	const [value, setValue] = useState('');
	const [isTouched, setIsTouched] = useState(false);

	const isValid = validate(value);
	const hasError = isTouched && !isValid;

	const valueChangeHandler = (event) => {
		setValue(event.target.value);
	};

	const inputBlurHandler = (event) => {
		setIsTouched(true);
	};

	const reset = () => {
		setValue('');
		setIsTouched(false);
	};

	return {
		value,
		isValid,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	};
};
export default useIn;
