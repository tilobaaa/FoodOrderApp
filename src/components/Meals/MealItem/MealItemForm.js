import {useRef, useState} from 'react'
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef();
  
  const submitHandler = (event)=>{
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber= +enteredAmount;

    if (enteredAmount.trim().length=== 0 || enteredAmountNumber<1 || enteredAmountNumber>5){
      setAmountIsValid(false);
      return
    }

    props.onAddCart(enteredAmountNumber);
  }

  
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{ id: 'amount_'+props.id, type: "number", min: "1", max: "5", defaultValue: '1', step:'1'}}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Kindly enter a valid amount </p>}
    </form>
  );
};

export default MealItemForm;
