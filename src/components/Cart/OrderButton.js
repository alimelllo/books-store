import classes from './OrderButton.module.css';



const OrderButton = (props) => {
    

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAdd();
        
      };
    
    
 
   
    return (<form onSubmit={submitHandler }>
        <button className={classes.button} >
add to cart
        </button>
   
        </form>
    )
};

export default OrderButton ;