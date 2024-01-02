import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import CartProvider from './Components/Store/CartProvider';

function App() {
  const [CartIsShown,setCartIsShown] = useState(false)

  const showCarthandler = ()=>{
    setCartIsShown(true)
  }
  const hideCarthandler = ()=>{
    setCartIsShown(false)
  }

  return (
    <CartProvider>
    {CartIsShown && <Cart onClose={hideCarthandler}/>}
     <Header onShowCart={showCarthandler}/>
     <Meals/>
     </CartProvider>
  );
}

export default App;
