import useNewInput from '../hooks/use-newInput'
const BasicForm = (props) => {

  const { value: nameValue, inputHasEror: nameInpuHasError, isValid: nameIsValid, inputHandler: nameHandler, inputBlur: nameInputBlur, ressetInput: resetNameInput } = useNewInput(value => value.trim() !== '');
  const { value: lastNameValue, inputHasEror: lastNameInpuHasError, isValid: lastNameIsValid, inputHandler: lastNameHandler, inputBlur: lastNameInputBlur, ressetInput: resetLastNameInput } = useNewInput(value => value.trim() !== '');

  let formIsValid = false;
  if (nameIsValid && lastNameIsValid) {
    formIsValid = true;
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (nameInpuHasError && lastNameInpuHasError) {
      formIsValid = false;
    }

    console.log(nameValue);
    console.log(lastNameValue);

    resetNameInput();
    resetLastNameInput();
  }
  const nameInputClass = !nameInpuHasError ? 'form-control' : 'form-control invalid';
  const lastNameInputClass = !lastNameInpuHasError ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={nameInputClass}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onBlur={nameInputBlur} onChange={nameHandler} value={nameValue} />
          {nameInpuHasError && <p className={['error-text']}>Enter Your Name</p>}
        </div>

        <div className={lastNameInputClass}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' onBlur={lastNameInputBlur} onChange={lastNameHandler} value={lastNameValue} />
          {lastNameInpuHasError && <p className={['error-text']}>Enter Your Last name</p>}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='emaič'>E-Mail Address</label>
        <input type='email' id='email' />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
