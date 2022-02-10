import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/background.png';
import classes from './Header.module.css';
import bookicon from '../../assets/bookicon.png';
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
      <div className={classes.maintitle}> 
         <img src={bookicon} className={classes.icon}></img>
        <h1>Books</h1>
</div>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;