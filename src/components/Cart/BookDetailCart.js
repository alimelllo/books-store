import { useContext } from 'react';

import Modal from '../UI/Modal';

import classes from './BookDetailCart.module.css';
import CartContext from '../../store/cart-context';

import OrderButton from './OrderButton';
import BookDetailList from './BookDetailList';

const BookDetailCart = (props) => {
  const cartCtx = useContext(CartContext);


  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.data.name,
      amount: amount,
      price: props.data.price,
      description: props.data.description,
    });

  };

 
const cartItemAddHandler = (data) => {
    cartCtx.addItem({ ...data, amount: 1 });
    props.onClose();
    props.shownotif();
  };

    const booksList = props.data.detail.map((item) => (
      
      <BookDetailList
  
        list={item}
      
         
      />
    ));
  
  

  return (
    <Modal onClose={props.onClose}>
    <div className={classes.container}>
      
      
      <div className={classes.header}>
<h1>{props.data.name}</h1>
 <h1>{props.data.price} $</h1>  
      </div>



<div className={classes.listandimage} >
<div className={classes.list}>
{booksList}
</div>

<div className={classes.imagecon}>
<img className={classes.image} src={props.data.image}></img>
</div>
    </div>    
        
     
    
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose} >
          Close
        </button>
        <OrderButton  className={classes['button--alt']} onAddToCart={ addToCartHandler } onAdd={cartItemAddHandler.bind(null, props.data)} />
      </div>


      </div>
    </Modal>
  );
};

export default BookDetailCart;