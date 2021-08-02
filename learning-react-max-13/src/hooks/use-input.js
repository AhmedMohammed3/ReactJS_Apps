import { useReducer } from 'react';

const INPUT = 'INPUT';
const BLUR = 'BLUR';
const RESET = 'RESET';

const initialInputState = {
	value: '',
	isTouched: false,
};

const inputStateReducer = (prevState, action) => {
	if (action.type === INPUT) {
		return {
			...prevState,
			value: action.value,
		};
	} else if (action.type === BLUR) {
		return {
			...prevState,
			isTouched: true,
		};
	}
	return initialInputState;
};

const useInput = (validateValue) => {
	const [inputState, dispatch] = useReducer(
		inputStateReducer,
		initialInputState
	);

	const isValid = validateValue(inputState.value);
	const hasError = !isValid && inputState.isTouched;

	const valueChangeHandler = (event) => {
		// setValue(event.target.value);
		dispatch({ type: INPUT, value: event.target.value });
	};

	const inputBlurHandler = (event) => {
		// setIsTouched(true);
		dispatch({ type: BLUR });
	};

	const reset = () => {
		dispatch({ type: RESET });
	};

	return {
		value: inputState.value,
		isValid: isValid,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	};
};
export default useInput;
