import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../UI/CartIcon";

const HeaderCartButton = (props) => {

const [btnItemIsAdded, setBtnItemIsAdded] = useState(false);
const cartctx = useContext(CartContext);

const numberOfCartItems = cartctx.items.reduce((accumValue, item)=>{ return (accumValue + item.amount)}, 0)

const btnClasses= `${classes.button} ${btnItemIsAdded ? classes.bump : ''}`;
useEffect(()=>{
  if (cartctx.items.length === 0 ){
    return;
  }
  setBtnItemIsAdded(true);
  const timer = setTimeout(()=>{
    setBtnItemIsAdded(false)
  }, 300)

  return ()=>{
    clearTimeout(timer)
  }
},[cartctx.items])

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
