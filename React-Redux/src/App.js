import Counter from './components/Counter';
import { Fragment } from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import {useSelector} from 'react-redux';

function App() {
  const authShow = useSelector((state) => state.auth.isAuth);

  return (
    <Fragment>
    <Header />
    {!authShow && <Auth />}
    {authShow && <UserProfile />}
      <Counter />
    </Fragment>
  );

  };
export default App;
