import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === 'ADD'){
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const toFindIndexOfCartAdded = state.items.findIndex(item=> item.id === action.item.id);
    const cartItemAdded= state.items[toFindIndexOfCartAdded];
    let updatedItems;

    if (cartItemAdded){
      const updatedItem = {
        ...cartItemAdded,
        amount: cartItemAdded.amount + action.item.amount
      }

      updatedItems=[...state.items];
      updatedItems[toFindIndexOfCartAdded]= updatedItem;
    }else{
     updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  if (action.type==='REMOVE'){
    const toFindIndexOfCartRemoved = state.items.findIndex(item=>item.id === action.id);
    const cartItemRemoved = state.items[toFindIndexOfCartRemoved];

    const updatedTotalAmount = state.totalAmount - cartItemRemoved.price;
    let updatedItems;

    if (cartItemRemoved.amount === 1){
       updatedItems = state.items.filter(item=> item.id !== action.id);
    } else {
      const updatedItem = {
        ...cartItemRemoved,
        amount : cartItemRemoved.amount - 1
      }
      updatedItems= [...state.items];
      updatedItems[toFindIndexOfCartRemoved] = updatedItem
    }

    return{
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }

  }
  return defaultState
};

const CartProvider = (props) => {

  const [cartState, dispatchActionCart] = useReducer(cartReducer, defaultState);
  const addItemsToCart = (item) => {
    dispatchActionCart({type:'ADD', item:item})
  };

  const removeItemsToCart = (id) => {
    dispatchActionCart({type:'REMOVE', id:id})
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemsToCart,
    removeItem: removeItemsToCart
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
