import { useState } from 'react'
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

    const { value: enteredName,
        hasError: nameInputError,
        isValid: nameInputIsValid,
        inputHandler: nameInputHandler,
        reset: nameInputReset,
        inputBlurHandler: nameInputBlurHandler } = useInput(value => value.trim() !== '');

    const [enteredEmailInput, setEnteredEmailInput] = useState('');

    const [inputEmailTuched, setInputEmailTuched] = useState(false);

    // const regName = /^[A-žÀ-ÿš ]+$/;
    const regEmail = /^[a-z]+[0-9a-zA-Z_.]*@[a-z_]+.[a-z]+$/;

    const enteredEmailIsValid = enteredEmailInput.trim() !== '' && regEmail.test(enteredEmailInput);

    const emailInputIsValid = !enteredEmailIsValid && inputEmailTuched;


    let formIsValid = false;

    if (nameInputIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }


    const enteredEmailInputHandler = (e) => {
        setEnteredEmailInput(e.target.value);

    }

    const emailInputBlurHandler = () => {
        setInputEmailTuched(true);
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();

        setInputEmailTuched(true);
        if (!nameInputError && !enteredEmailIsValid) {
            formIsValid = false;

        }

        console.log(enteredName);
        console.log(enteredEmailInput);
        nameInputReset();
        setEnteredEmailInput('');
        setInputEmailTuched(false);
    }
    const inputNameClass = !nameInputError ? 'form-control' : 'form-control invalid';
    const inputEmailClass = !emailInputIsValid ? 'form-control' : 'form-control invalid';
    return (
        <form onSubmit={formSubmitHandler}>
            <div className={inputNameClass}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' onChange={nameInputHandler}
                    onBlur={nameInputBlurHandler} value={enteredName} />
            </div>
            {nameInputError && <p className='error-text'>Enter Valid Name !!!</p>}
            <div className={inputEmailClass}>
                <label htmlFor='email'>Your Email</label>
                <input type='email' id='email' onChange={enteredEmailInputHandler}
                    onBlur={emailInputBlurHandler} value={enteredEmailInput} />
            </div>
            {emailInputIsValid && <p className='error-text'>Enter Valid Email !!!</p>}
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;



/* import { useRef, useState } from 'react'

const SimpleInput = (props) => {
    const inputRef = useRef();
    const [enteredNameInput, setEnteredNameInput] = useState('');
    const [inputIsValid, setInputIsValid] = useState(true);

    const enteredNameInputHandler = (e) => {
        setEnteredNameInput(e.target.value);
        setInputIsValid(true);
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (enteredNameInput.trim() === '') {
            setInputIsValid(false);
            return;
        }
        setInputIsValid(true);
        console.log(enteredNameInput);
        console.log(inputRef.current.value);
        setEnteredNameInput('');

    }
    const inputClass = inputIsValid ? 'form-control' : 'form-control invalid';
    return (
        <form onSubmit={formSubmitHandler}>
            <div className={inputClass}>
                <label htmlFor='name'>Your Name</label>
                <input ref={inputRef} type='text' id='name' onChange={enteredNameInputHandler} value={enteredNameInput} />
            </div>
            {!inputIsValid && <p className='error-text'>Enter Your name !!!</p>}
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput; */
