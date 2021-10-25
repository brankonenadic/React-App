import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    if (isLogin) {

    } else {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA_7gon5wLU-7yN6nQHEt8uejZOF6ApOXU', {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(res => {
        if (res.ok) {

        } else {
          return res.json().then(data => {
            let errorMessage = 'Authentacion failed!'
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage);
          });
        }
      })
    }

  };
  return (
    <section className={classes.auth} onSubmit={submitHandler}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input ref={emailRef} type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input ref={passwordRef} type='password' id='password' autoComplete="off" required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
