import { createSlice } from '@reduxjs/toolkit';

const notificationInitialState = () => ({
	isVisible: false,
	title: '',
	msg: '',
});

const notificationsSlice = createSlice({
	name: 'notification',
	initialState: notificationInitialState(),
	reducers: {
		setNotificationMessage(state, { payload: notif }) {
			state.isVisible = true;
			state.title = notif.title || '';
			state.msg = notif.msg;
		},
		resetNotification(state) {
			state.isVisible = false;
			state.title = '';
			state.msg = '';
		},
	},
});

export const notificationsActions = notificationsSlice.actions;
export default notificationsSlice.reducer;
