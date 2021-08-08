import { calculateRemainingTime } from '../../helpers/http.helper';
import { authActions } from '../reducers/auth-reducer';

let logoutTimer;

export const setLogout = () => {
	return dispatch => {
		dispatch(authActions.setLoggedOut());
		localStorage.removeItem('idToken');
		localStorage.removeItem('expirationTime');
		if (logoutTimer) {
			clearTimeout(logoutTimer);
		}
	};
};

export const sendLoginRequest = (idToken, expirationTime) => {
	return dispatch => {
		if (!localStorage.getItem('idToken')) {
			localStorage.setItem('idToken', JSON.stringify(idToken));
			localStorage.setItem('expirationTime', JSON.stringify(expirationTime));
		}
		dispatch(authActions.setLoggedIn(idToken));

		console.log('expirationTime', expirationTime);
		const remainingTime = calculateRemainingTime(expirationTime);
		console.log('remainingTime', remainingTime);
		logoutTimer = setTimeout(() => {
			dispatch(setLogout());
		}, remainingTime);
	};
};
