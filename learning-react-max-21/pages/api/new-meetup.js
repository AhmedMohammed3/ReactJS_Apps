import { MongoClient } from 'mongodb';

// POST /api/new-meetup
const MONGODB_URI =
	'mongodb://hassanroot:root@cluster0-shard-00-00.vieeu.mongodb.net:27017,cluster0-shard-00-01.vieeu.mongodb.net:27017,cluster0-shard-00-02.vieeu.mongodb.net:27017/nextjsmeetups?authSource=admin&replicaSet=atlas-xvl5id-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';
const handler = async (req, res) => {
	if (req.method === 'POST') {
		const data = req.body;

		const client = await MongoClient.connect(MONGODB_URI);

		const db = client.db();

		const meetupsCollection = db.collection('meetups');

		const result = await meetupsCollection.insertOne(data);
		console.log('result from api', result);

		client.close();

		res.status(201).json({
			message: 'Saved Successfully',
			meetupId: result.insertedId,
		});
	}
};

export default handler;
