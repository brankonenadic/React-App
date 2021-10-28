import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';


const HomePage = (props) => {

    return (
        <MeetupList meetups={props.meetups} />
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