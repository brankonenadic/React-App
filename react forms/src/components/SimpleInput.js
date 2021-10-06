import {useRef, useState} from 'react'

const SimpleInput = (props) => {
    const [enteredInput, setEnteredInput] = useState();

    const enteredInputHandler = (e) => {
        setEnteredInput(e.target.value);
    }
const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(enteredInput);
    setEnteredInput('');
}
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={enteredInputHandler} value={enteredInput} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
