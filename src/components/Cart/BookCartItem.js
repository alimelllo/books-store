import classes from './BookCartItem.module.css';

const BookCartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
        <span  className={classes.price}> {props.desc} </span>
          <span className={classes.price}>{price}</span>

        </div>
      </div>
      <div className={classes.actions}><button onClick={props.onAdd}>buy</button>
      </div >
    </li>
  );
};

export default BookCartItem;