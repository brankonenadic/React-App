import useNewInput from '../hooks/use-newInput'
const BasicForm = (props) => {
  const regName = /^[A-žÀ-ÿš ]+$/;
  const regEmail = /^[a-z]+[0-9a-zA-Z_.]*@[a-z_]+.[a-z]+$/;

  const {
    value: nameValue,
    inputHasEror: nameInpuHasError,
    isValid: nameIsValid,
    inputHandler: nameHandler,
    inputBlur: nameInputBlur,
    ressetInput: resetNameInput
  } = useNewInput(value => value.trim() !== '' && regName.test(value));

  const {
    value: lastNameValue,
    inputHasEror: lastNameInpuHasError,
    isValid: lastNameIsValid,
    inputHandler: lastNameHandler,
    inputBlur: lastNameInputBlur,
    ressetInput: resetLastNameInput
  } = useNewInput(value => value.trim() !== '' && regName.test(value));

  const {
    value: emailValue,
    inputHasEror: emailInpuHasError,
    isValid: emailIsValid,
    inputHandler: emailHandler,
    inputBlur: emailInputBlur,
    ressetInput: resetEmailInput
  } = useNewInput(value => value.trim() !== '' && regEmail.test(value));

  let formIsValid = false;

  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (nameInpuHasError && lastNameInpuHasError && emailInpuHasError) {
      formIsValid = false;
    }

    console.log(nameValue);
    console.log(lastNameValue);
    console.log(emailValue);

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  }
  const nameInputClass = !nameInpuHasError ? 'form-control' : 'form-control invalid';
  
  const lastNameInputClass = !lastNameInpuHasError ? 'form-control' : 'form-control invalid';

  const emailInputClass = !emailInpuHasError ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={nameInputClass}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onBlur={nameInputBlur} onChange={nameHandler} value={nameValue} />
          {nameInpuHasError && <p className={['error-text']}><small>Enter Your Name</small></p>}
        </div>

        <div className={lastNameInputClass}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' onBlur={lastNameInputBlur} onChange={lastNameHandler} value={lastNameValue} />
          {lastNameInpuHasError && <p className={['error-text']}><small>Enter Your Last name</small></p>}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor='emaič'>E-Mail Address</label>
        <input type='email' id='email' onBlur={emailInputBlur} onChange={emailHandler} value={emailValue} />
        {emailInpuHasError && <p className={['error-text']}><small>Enter Valid Email</small></p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
