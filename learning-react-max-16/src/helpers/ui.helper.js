import { notificationsActions } from '../store/reducers/notifications.reducer';

export const showNotification = (msg, dispatch, title) => {
	dispatch(notificationsActions.setNotificationMessage({ title: title, msg: msg }));
	setTimeout(() => {
		dispatch(notificationsActions.resetNotification());
	}, 1000);
};
