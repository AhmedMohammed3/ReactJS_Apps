export const BACKEND_URL = 'http://localhost:1234';
export const AUTH_ENDPOINT = `${BACKEND_URL}/auth`;

export const calculateRemainingTime = expirationTime => {
	const currentTime = new Date().getTime();
	const adjExpirationTime = new Date(expirationTime).getTime();

	const remainingDuration = adjExpirationTime - currentTime;

	return remainingDuration;
};

export const retrieveStoredToken = () => {
	const idToken = JSON.parse(localStorage.getItem('idToken'));
	const expirationTime = JSON.parse(localStorage.getItem('expirationTime'));

	const remainingTime = calculateRemainingTime(expirationTime);

	if (remainingTime <= 60000) {
		localStorage.removeItem('idToken');
		localStorage.removeItem('expirationTime');
		return null;
	}

	return { idToken, expirationTime };
};
