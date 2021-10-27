import NewMeetupForm from '../../components/meetups/NewMeetupForm';


const NewMeetup = () => {
    const onAddHandler = (enteredMeetupData) => {
        console.log(enteredMeetupData);
    };
return (
    <NewMeetupForm onAddMeetup={onAddHandler} />
);
};

export default NewMeetup;