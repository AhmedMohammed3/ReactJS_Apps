import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
	idToken: null,
	isLoggedIn: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState: authInitialState,
	reducers: {
		setLoggedIn(state, { payload: idToken }) {
			console.log('login');
			state.idToken = idToken;
			state.isLoggedIn = true;
		},
		setLoggedOut(state) {
			console.log('logout');
			state.idToken = null;
			state.isLoggedIn = false;
		},
	},
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
