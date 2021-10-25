import { useRef } from 'react';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPassword = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredNewPassword = newPassword.current.value;
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' autoComplete="off" ref={newPassword} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
