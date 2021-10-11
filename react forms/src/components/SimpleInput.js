
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

    // const regName = /^[A-žÀ-ÿš ]+$/;
    const regEmail = /^[a-z]+[0-9a-zA-Z_.]*@[a-z_]+.[a-z]+$/;
    const { value: enteredName,
        hasError: nameInputError,
        isValid: nameInputIsValid,
        inputHandler: nameInputHandler,
        reset: nameInputReset,
        inputBlurHandler: nameInputBlurHandler } = useInput(value => value.trim() !== '');
    const { value: enteredEmail,
        hasError: emailInputError,
        isValid: emailInputIsValid,
        inputHandler: emailInputHandler,
        reset: emailInputReset,
        inputBlurHandler: emailInputBlurHandler} = useInput(value => regEmail.test(value));;


    let formIsValid = false;

    if (nameInputIsValid && emailInputIsValid) {
        formIsValid = true;
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();

    
        if (!nameInputError && !emailInputError) {
            formIsValid = false;

        }

        console.log(enteredName);
        console.log(enteredEmail);
        nameInputReset();
        emailInputReset();
    }
    const inputNameClass = !nameInputError ? 'form-control' : 'form-control invalid';
    const inputEmailClass = !emailInputError ? 'form-control' : 'form-control invalid';
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
                <input type='email' id='email' onChange={emailInputHandler}
                    onBlur={emailInputBlurHandler} value={enteredEmail} />
            </div>
            {emailInputError && <p className='error-text'>Enter Valid Email !!!</p>}
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
