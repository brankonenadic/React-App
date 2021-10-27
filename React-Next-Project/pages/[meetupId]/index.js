import { Fragment } from "react";

const MeetupDetailPage = () => {
    return (
        <Fragment>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Vernazza_and_the_sea%2C_Cinque_Terre%2C_Italy.jpg/1024px-Vernazza_and_the_sea%2C_Cinque_Terre%2C_Italy.jpg' alt='some meetup'/>
            <h1>Some meetup</h1>
            <address>Some address  , SomeCity 323892</address>
            <p>Some description...</p>
        </Fragment>
    );
};

export default MeetupDetailPage;