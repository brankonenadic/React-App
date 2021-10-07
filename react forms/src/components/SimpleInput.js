import { useState } from 'react'

const SimpleInput = (props) => {

    const [enteredNameInput, setEnteredNameInput] = useState('');
    const [enteredEmailInput, setEnteredEmailInput] = useState('');
    const [inputNameTuched, setInputNameTuched] = useState(false);
    const [inputEmailTuched, setInputEmailTuched] = useState(false);

    const regName = /^[A-žÀ-ÿš ]+$/;
    const regEmail = /^[a-z]+[0-9a-zA-Z_.]*@[a-z_]+.[a-z]+$/;

    const enteredNameIsValid = enteredNameInput.trim() !== '' && regName.test(enteredNameInput);
    const enteredEmailIsValid = enteredEmailInput.trim() !== '' && regEmail.test(enteredEmailInput);
    const nameInputIsValid = !enteredNameIsValid && inputNameTuched;
    const emailInputIsValid = !enteredEmailIsValid && inputEmailTuched;
    

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const enteredNameInputHandler = (e) => {
        setEnteredNameInput(e.target.value);
        
    }
    const enteredEmailInputHandler = (e) => {
        setEnteredEmailInput(e.target.value);
        
    }
    const nameInputBlurHandler = () => {
        setInputNameTuched(true);
    }
    const emailInputBlurHandler = () => {
        setInputEmailTuched(true);
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        setInputNameTuched(true);
        setInputEmailTuched(true);
        if (!enteredNameIsValid && !enteredEmailIsValid) {
            formIsValid = false;

        }
    
        console.log(enteredNameInput);
        console.log(enteredEmailInput);
        setEnteredNameInput('');
        setEnteredEmailInput('');
        setInputNameTuched(false);
        setInputEmailTuched(false);
    }
    const inputNameClass = !nameInputIsValid ? 'form-control' : 'form-control invalid';
    const inputEmailClass = !emailInputIsValid ? 'form-control' : 'form-control invalid';
    return (
        <form onSubmit={formSubmitHandler}>
            <div className={inputNameClass}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' onChange={enteredNameInputHandler}
                onBlur={nameInputBlurHandler} value={enteredNameInput} />
            </div>
            {nameInputIsValid && <p className='error-text'>Enter Your Name !!!</p>}
            <div className={inputEmailClass}>
                <label htmlFor='email'>Your Email</label>
                <input type='text' id='email' onChange={enteredEmailInputHandler}
                onBlur={emailInputBlurHandler} value={enteredEmailInput} />
            </div>
            {emailInputIsValid && <p className='error-text'>Enter Your Email !!!</p>}
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
