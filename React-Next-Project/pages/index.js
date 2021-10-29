import { MongoClient } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';


const HomePage = (props) => {

    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <mmeta name="description" content="Browse a huge list of highly active react meetups" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    );

};
export async function getStaticProps() {


    const client = await MongoClient.connect('mongodb+srv://LaninTata:2810Lana15!@cluster0.t69mt.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupCollection = db.collection('meetup');
    const meetups = await meetupCollection.find().toArray();
    client.close();
    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 1
    };
};
export default HomePage;