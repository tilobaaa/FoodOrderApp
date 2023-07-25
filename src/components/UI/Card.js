import classes from './Card.module.css';

const Card = (props)=>{
    return <li className={classes.card}>{props.children}</li>
}

export default Card