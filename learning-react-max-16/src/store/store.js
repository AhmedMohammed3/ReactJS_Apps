import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart-reducer';
import notificationsReducer from './reducers/notifications.reducer';

const store = configureStore({
	reducer: {
		cart: cartReducer,
		notif: notificationsReducer,
	},
});

export default store;
