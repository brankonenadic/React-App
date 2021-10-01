import React, { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../Ui/Input'

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredAmount = amountRef.current.value;
        const convertEnteredAmount = +enteredAmount;
        if (enteredAmount.trim().length === 0 || convertEnteredAmount < 1 || convertEnteredAmount > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(convertEnteredAmount);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={amountRef} label= 'Amount' input={{id: 'amount'+ props.id, type: 'number', min: '1', max: '5', step: '1', defaultValue: '1'}} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}

export default MealItemForm
