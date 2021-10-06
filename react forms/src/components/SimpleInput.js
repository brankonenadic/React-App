import { useRef, useState } from 'react'

const SimpleInput = (props) => {
    const inputRef = useRef();
    const [enteredInput, setEnteredInput] = useState('');
    const [inputIsValid, setInputIsValid] = useState(true);

    const enteredInputHandler = (e) => {
        setEnteredInput(e.target.value);
        setInputIsValid(true);
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (enteredInput.trim() === '') {
            setInputIsValid(false);
            return;
        }
        setInputIsValid(true);
        console.log(enteredInput);
        console.log(inputRef.current.value);
        setEnteredInput('');

    }
    const inputClass = inputIsValid ? 'form-control' : 'form-control invalid';
    return (
        <form onSubmit={formSubmitHandler}>
            <div className={inputClass}>
                <label htmlFor='name'>Your Name</label>
                <input ref={inputRef} type='text' id='name' onChange={enteredInputHandler} value={enteredInput} />
            </div>
            {!inputIsValid && <p className='error-text'>Enter Your name !!!</p>}
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
