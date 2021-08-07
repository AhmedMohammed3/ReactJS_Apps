import ReactDOM from 'react-dom';

import classes from './Notifications.module.css';

import Card from './Card';

const NotifPortal = ({ title, msg }) => {
	return (
		<Card className={classes.notif}>
			<h2>{title}</h2>
			<p>{msg}</p>
		</Card>
	);
};

const Notification = ({ title, msg }) => {
	return ReactDOM.createPortal(
		<NotifPortal title={title} msg={msg} />,
		document.getElementById('notif_id')
	);
};

export default Notification;
