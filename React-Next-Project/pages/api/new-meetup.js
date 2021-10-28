import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://LaninTata:2810Lana15!@cluster0.t69mt.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupCollection = db.collection('meetup');
        const result = await meetupCollection.insertOne(data);
        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup is insert'});
    }
};

export default handler;