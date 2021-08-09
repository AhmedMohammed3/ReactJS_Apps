/* eslint-disable @next/next/no-img-element */
import { MongoClient, ObjectId } from 'mongodb';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

/*
title: 'A First Meetup',
		image:
			'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
		address: 'Some Address 5, 12345 Some City',
		description: 'This is a first meeting',
 */
const MeetupDetails = ({ meetup }) => {
	const router = useRouter();
	return (
		<Fragment>
			<Head>
				<title>NextJs Meetups - {meetup.title}</title>
				<meta name='description' content={meetup.description} />
			</Head>
			<MeetupDetail
				id={meetup._id}
				title={meetup.title}
				image={meetup.image}
				address={meetup.address}
				description={meetup.description}
			/>
		</Fragment>
	);
};

const MONGODB_URI =
	'mongodb://hassanroot:root@cluster0-shard-00-00.vieeu.mongodb.net:27017,cluster0-shard-00-01.vieeu.mongodb.net:27017,cluster0-shard-00-02.vieeu.mongodb.net:27017/nextjsmeetups?authSource=admin&replicaSet=atlas-xvl5id-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';

export const getStaticPaths = async () => {
	const client = await MongoClient.connect(MONGODB_URI);

	const db = client.db();

	const meetupsCollection = db.collection('meetups');

	const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

	client.close();

	return {
		fallback: 'blocking',
		paths: meetups.map(meetup => ({
			params: {
				meetupId: meetup._id.toString(),
			},
		})),
	};
};

export const getStaticProps = async context => {
	const meetupId = context.params.meetupId;

	const client = await MongoClient.connect(MONGODB_URI);

	const db = client.db();

	const meetupsCollection = db.collection('meetups');

	const fetchedMeetup = await meetupsCollection.findOne({
		_id: ObjectId(meetupId),
	});

	client.close();
	return {
		props: {
			meetup: { ...fetchedMeetup, _id: fetchedMeetup._id.toString() },
		},
	};
};

export default MeetupDetails;
