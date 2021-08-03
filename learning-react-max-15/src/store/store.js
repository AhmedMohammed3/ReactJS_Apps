import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter-slice';
import authReducer from './slices/auth-slice';

const store = configureStore({
	reducer: {
		counter: counterReducer,
		auth: authReducer,
	},
});

export default store;
