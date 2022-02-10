import classes from './BookDetailList.module.css';


const BookDetailList = (props) =>{
    return (
        <li className={classes.list}>
           
{props.list}
</li>
      
    )
}
export default BookDetailList;