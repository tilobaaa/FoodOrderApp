import React,  {Fragment} from "react";
import MealsImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = props =>{
    return(
        <Fragment>
            <header className={classes.header}>  
                <h1>ReactMeals </h1>
                <HeaderCartButton onClick={props.onTouch}/>
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImage} alt="A table of food" />
            </div>
        </Fragment>
    )
    }

export default Header