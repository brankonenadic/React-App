import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailPage = (props) => {

    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" description={props.meetupData.description} />
            </Head>
            <MeetupDetail image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address} description={props.meetupData.description} />
        </Fragment>
    );
};
export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://LaninTata:2810Lana15!@cluster0.t69mt.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupCollection = db.collection('meetup');

    const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
    client.close();

    return {
        fallback: false,
        paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } }))
    }
};

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://LaninTata:2810Lana15!@cluster0.t69mt.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupCollection = db.collection('meetup');

    const selectedMeetup = await meetupCollection.findOne({ _id: ObjectId(meetupId) });
    client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                address: selectedMeetup.address,
                description: selectedMeetup.description
            }
        }
    };
};

export default MeetupDetailPage;