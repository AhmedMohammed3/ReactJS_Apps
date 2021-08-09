import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { Fragment } from 'react';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
	const router = useRouter();

	const addMeetupHandler = async enteredMeetupData => {
		const res = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(enteredMeetupData),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const resData = await res.json();
		console.log('resData from client', resData);

		router.replace('/');
	};

	return (
		<Fragment>
			<Head>
				<title>NextJs Meetups - Add a New Meetups</title>
				<meta
					name='description'
					content='Add your own meetups and create amazing networking opportunities'
				/>
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />;
		</Fragment>
	);
};
export default NewMeetupPage;
