import { MongoClient } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailPage = () => {

    return (
        <MeetupDetail image='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Vernazza_and_the_sea%2C_Cinque_Terre%2C_Italy.jpg/1024px-Vernazza_and_the_sea%2C_Cinque_Terre%2C_Italy.jpg'
        title='Some meetup'
        address='Some address  , SomeCity 323892' description='Some description...' />
    );
};
export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://LaninTata:2810Lana15!@cluster0.t69mt.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupCollection = db.collection('meetup');
    
    const meetups = await meetupCollection.find({}, {_id: 1}).toArray();
    client.close();

    return {
        fallback: false,
        paths: meetups.map(meetup => ({params: {meetupId: meetup._id.toString()}}))
    }
};

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    return {
        props: {
         meetupData: {
             image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Vernazza_and_the_sea%2C_Cinque_Terre%2C_Italy.jpg/1024px-Vernazza_and_the_sea%2C_Cinque_Terre%2C_Italy.jpg',
            id: meetupId,
            title:'Some meetup',
            address:'Some address  , SomeCity 323892',
            description: 'Some description...'
        }
        }
    };
};

export default MeetupDetailPage;