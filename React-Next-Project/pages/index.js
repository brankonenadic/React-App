import MeetupList from '../components/meetups/MeetupList';

const DUMMY_LIST = [
    {
        id: 'm1',
        title: 'First meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/1_riomaggiore_2012.jpg/1024px-1_riomaggiore_2012.jpg',
        address: 'Some address, some city 71320',
        description: 'My first meetup'
    },
    {
        id: 'm2',
        title: 'Second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Corniglia_panorama.jpg',
        address: 'Some address2, some city2 71320',
        description: 'My second meetup'
    },
    {
        id: 'm3',
        title: 'Threed meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Vernazza_and_the_sea%2C_Cinque_Terre%2C_Italy.jpg/1024px-Vernazza_and_the_sea%2C_Cinque_Terre%2C_Italy.jpg',
        address: 'Some address3, some city3 71320',
        description: 'My three meetup'
    },
];

const HomePage = () => {

return (
<MeetupList meetups={DUMMY_LIST}/>
);

};

export default HomePage;