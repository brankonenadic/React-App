import React, { useState } from 'react'
import Button from '../Ui/Button';
import Card from '../Ui/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const addUserHendler = (e) => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }
    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    }
    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHendler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser
