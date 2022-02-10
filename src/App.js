import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import BookDetailCart from './components/Cart/BookDetailCart';
import { toast } from 'wc-toast';


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [projectcartIsShown, setprojectCartIsShown] = useState(false);
  const showCartHandler = (item) => {
    setCartIsShown(item);
    
  };
const projectcarthandler = (item) =>{
  setprojectCartIsShown(item);
}
const handleSuccessToast = () => {
  toast.success('Added To Cart');
};


  const hideCartHandler = () => {
    setCartIsShown(false);
    setprojectCartIsShown(false);
  };

  return (
    <CartProvider>
       <wc-toast></wc-toast>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {projectcartIsShown && <BookDetailCart data={projectcartIsShown} shownotif={handleSuccessToast} onClose={hideCartHandler} />}
     
      <Header onShowCart={showCartHandler} />
      <main>
      <Meals onShowCart={projectcarthandler}/>
      </main>
    </CartProvider>
  );
}

export default App;
