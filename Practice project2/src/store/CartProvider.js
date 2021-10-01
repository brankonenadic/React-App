import React from 'react'
import { useReducer } from 'react'
import CartContext from './cart-context'

const deafultCartStae = {
    items: [],
    amount: 0
}

const cartReducer = (state , action) => {
    if (action.type === 'ADD') {
        const updateItems = state.items.concat(action.item);
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updateItems,
            totalAmount: updateTotalAmount
        };
    }
    return deafultCartStae;
}

const CartProvider = (props) => {
   const [cartState , dispachCart] = useReducer(cartReducer, deafultCartStae);
    const addItemToCartToHandler = (item) => {
        dispachCart({type: 'ADD', item: item});
    }
    const removeItemFromCartHandler = (id) => {
        dispachCart({type: 'REMOVE', id: id});
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartToHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
