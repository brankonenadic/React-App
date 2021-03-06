import { useRef, useState } from 'react'
import classes from './Checkout.module.css';


const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;


const Checkout = (props) => {
  const [inputValiditi, setInputValiditi] = useState({
    name: true,
    street: true,
    postal: true,
    city: true
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const postalIsValid = isFiveChars(enteredPostal);
    const cityIsValid = !isEmpty(enteredCity);

    setInputValiditi({
      name: nameIsValid,
      street: streetIsValid,
      postal: postalIsValid,
      city: cityIsValid
    });


    const formIsValid = nameIsValid && streetIsValid && postalIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity
    });

  };
  const invalidNameClass = `${classes.control} ${inputValiditi.name ? '' : classes.invalid}`;
  const invalidStreetClass = `${classes.control} ${inputValiditi.street ? '' : classes.invalid}`;
  const invalidPostalClass = `${classes.control} ${inputValiditi.postal ? '' : classes.invalid}`;
  const invalidCityClass = `${classes.control} ${inputValiditi.city ? '' : classes.invalid}`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={invalidNameClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!inputValiditi.name && <p>Enter valid name !</p>}
      </div>
      <div className={invalidStreetClass}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!inputValiditi.street && <p>Enter valid street !</p>}
      </div>
      <div className={invalidPostalClass}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef} />
        {!inputValiditi.postal && <p>Enter valid postal code !</p>}
      </div>
      <div className={invalidCityClass}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!inputValiditi.city && <p>Enter valid city !</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;