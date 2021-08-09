import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

const HomePage = props => {
	return (
		<Fragment>
			<Head>
				<title>NextJs Meetups</title>
				<meta
					name='description'
					content='Browse a huge list of highly active react meetups'
				/>
			</Head>
			<MeetupList meetups={props.meetups} />
		</Fragment>
	);
};

// export const getServerSideProps = async context => {

//     const req = context.req;
// 	const res = context.res;

// 	// TODO: fetch data from an API or DB

// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// };

const MONGODB_URI =
	'mongodb://hassanroot:root@cluster0-shard-00-00.vieeu.mongodb.net:27017,cluster0-shard-00-01.vieeu.mongodb.net:27017,cluster0-shard-00-02.vieeu.mongodb.net:27017/nextjsmeetups?authSource=admin&replicaSet=atlas-xvl5id-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';
export const getStaticProps = async () => {
	//TODO: fetch data from an API or DB

	const client = await MongoClient.connect(MONGODB_URI);

	const db = client.db();

	const meetupsCollection = db.collection('meetups');

	const meetups = await meetupsCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map(meetup => ({
				...meetup,
				_id: null,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 1,
	};
};

export default HomePage;
