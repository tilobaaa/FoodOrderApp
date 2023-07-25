import {useContext} from 'react';
import CartContext from '../../../store/cart-context'
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`; //use literal templates to give a value like $20.09... the first dollar sign is the normal dollar sign while the second is for the dynamic changes in value of price

    const addToCartHandler= (amount)=>{
      cartCtx.addItem({
        id:props.id,
        name: props.name,
        amount: amount,
        price: props.price
      })
    }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
