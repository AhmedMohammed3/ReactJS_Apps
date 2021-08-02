import { useReducer, useCallback } from 'react';

const TOGGLE_LOADING = 'TOGGLE_LOADING';
const SET_ERROR = 'SET_ERROR';

const defaultHttpReducer = {
	isLoading: true,
	error: null,
};

const httpReducer = (prevState, action) => {
	if (action.type === TOGGLE_LOADING) {
		return {
			...prevState,
			isLoading: !prevState.isLoading,
		};
	}
	if (action.type === SET_ERROR) {
		return {
			...prevState,
			error: action.message,
		};
	}
	return defaultHttpReducer;
};

const useHttp = () => {
	const [httpState, httpDispatch] = useReducer(httpReducer, defaultHttpReducer);

	const sendRequest = useCallback(
		({ url, method, headers, body }, applyData) => {
			fetch(url, {
				method: method ? method : 'GET',
				headers: headers ? method : {},
				body: body ? JSON.stringify(body) : null,
			})
				.then((res) => {
					if (!res.ok) {
						throw new Error('Request failed!');
					}
					return res.json();
				})
				.then((resData) => {
					applyData(resData);
					httpDispatch({ type: TOGGLE_LOADING });
				})
				.catch((err) => {
					httpDispatch({
						type: SET_ERROR,
						message: err.message,
					});
				});
		},
		[]
	);
	return {
		isLoading: httpState.isLoading,
		error: httpState.error,
		sendRequest,
	};
};

export default useHttp;
