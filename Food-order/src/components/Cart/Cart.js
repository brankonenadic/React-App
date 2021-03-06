import React, { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const [orderState, setOrderState] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  const orderHandler = () => {
    setOrderState(true);
  }
  const submitOrderHandler = async (userDAta) => {
    setIsSubmit(true);
    await fetch('https://food-order-3594b-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userDAta,
        orderItems: cartCtx.items
      })

    });
    setIsSubmit(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const modalActions = <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>
      Close
    </button>
    {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
  </div>;
  const cartModalContent = <React.Fragment>
    {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    {orderState && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
    {!orderState && modalActions}
  </React.Fragment>;
  const isSubmitingModalContent = <p>Sending order data ...</p>;
  const didSubmitModalContent = <React.Fragment>
    <p>Saccessfully send the order !</p>
    <div className={classes.actions}>
      <button className={classes.button} onClick={props.onClose}>
        Close
      </button>
    </div>
  </React.Fragment>;

  return (
    <Modal onClose={props.onClose}>
      {!isSubmit && !didSubmit && cartModalContent}
      {isSubmit && isSubmitingModalContent}
      {didSubmit && !isSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
