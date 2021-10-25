import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {

  const authCtx = useContext(AuthContext);
  const isloggedIn = authCtx.isLoggedIn;


  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
         {!isloggedIn && <li>
            <Link to='/auth'>Login</Link>
          </li>}
         {isloggedIn && <li>
            <Link to='/profile'>Profile</Link>
          </li>}
         {isloggedIn && <li>
            <button>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
