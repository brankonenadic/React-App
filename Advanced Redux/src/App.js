import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import {uiActions} from './store/uiSlice';

let initial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    const cartDaata = async () => {
     
   

     

    };
    if (initial) {
      initial = false;
      return;
    }
    cartDaata().catch(error => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'Sending cart data failed!'
      }));
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
     {notification &&  <Notification  status={notification.status} title={notification.title} message={notification.message} />}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
